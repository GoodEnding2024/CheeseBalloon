"use client";

import style from "src/components/ranking/RestRanking.module.scss";
import Image from "next/image";
import aflogo from "public/svgs/afreeca.svg";
import chzlogo from "public/svgs/chzzk.svg";
import nofav from "public/svgs/nofav.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import noimage from "public/svgs/blank_profile.png";
import { useState } from "react";

type RankingData = {
  streamerId: number;
  profileUrl: string;
  name: string;
  platform: string;
  diff: number;
  value: string;
  value2?: string;
};

type Props = {
  data: RankingData[] | undefined;
};

export default function RestRanking({ data }: Props) {
  const pathname = usePathname()?.split("/").pop() || "";
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageError((prev) => ({
      ...prev,
      [id]: true,
    }));
  };
  return (
    <div className={style.container}>
      {data &&
        data.map((item, index) => (
          <div key={index} className={style.subitem}>
            <div className={style.index}>{index + 4}</div>
            {pathname === "live" ? (
              <>
                <div className={style.livenameinfo}>
                  <div className={style.image}>
                    <Link href={`/detail/${item.streamerId}`}>
                      <Image
                        src={
                          imageError[item.streamerId]
                            ? noimage
                            : item.profileUrl
                        }
                        alt=""
                        width={48}
                        height={48}
                        onError={() => handleImageError(item.streamerId)}
                      />
                    </Link>
                  </div>
                  <div className={style.livename}>
                    <Link
                      href={`/detail/${item.streamerId}`}
                      className={style.link}
                    >
                      {item.name}
                    </Link>
                    <span className={style.logo}>
                      {item.platform === "A" || item.platform === "S" ? (
                        <Image src={aflogo} alt="" width={14} height={14} />
                      ) : (
                        <Image src={chzlogo} alt="" width={15} height={15} />
                      )}
                    </span>
                  </div>
                </div>
                <div className={style.livetitleinfo}>{item.value}</div>
                <div className={style.livesubinfo}>{item.value2}</div>
                <div className={style.liveinfo}>
                  {item.diff.toLocaleString()} 명
                </div>
                <div className={style.livefav}>
                  <Image src={nofav} alt="" width={20} height={20} />
                </div>
              </>
            ) : (
              <>
                <div className={style.nameinfo}>
                  <div className={style.image}>
                    <Link href={`/detail/${item.streamerId}`}>
                      <Image
                        src={
                          imageError[item.streamerId]
                            ? noimage
                            : item.profileUrl
                        }
                        alt=""
                        width={48}
                        height={48}
                        onError={() => handleImageError(item.streamerId)}
                      />
                    </Link>
                  </div>
                  <div className={style.name}>
                    <Link
                      href={`/detail/${item.streamerId}`}
                      className={style.link}
                    >
                      {item.name}
                    </Link>{" "}
                    {item.platform === "A" || item.platform === "S" ? (
                      <Image src={aflogo} alt="" width={14} height={14} />
                    ) : (
                      <Image src={chzlogo} alt="" width={14} height={14} />
                    )}
                  </div>
                </div>
                <div className={style.info}>
                  {item.value}{" "}
                  {pathname === "rating" ? (
                    <>
                      {item.diff > 0 && (
                        <span className={style.positive}>
                          (+ {Math.abs(item.diff).toFixed(2)})
                        </span>
                      )}
                      {item.diff < 0 && (
                        <span className={style.negative}>
                          (- {Math.abs(item.diff).toFixed(2)})
                        </span>
                      )}
                      {item.diff === 0 && (
                        <span className={style.zero}>( - )</span>
                      )}
                    </>
                  ) : (
                    <>
                      {item.diff > 0 && (
                        <span className={style.positive}>
                          (+ {Math.abs(item.diff).toLocaleString()})
                        </span>
                      )}
                      {item.diff < 0 && (
                        <span className={style.negative}>
                          (- {Math.abs(item.diff).toLocaleString()})
                        </span>
                      )}
                      {item.diff === 0 && (
                        <span className={style.zero}>( - )</span>
                      )}
                    </>
                  )}
                </div>
                <div className={style.fav}>
                  <Image src={nofav} alt="" width={20} height={20} />
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
}
