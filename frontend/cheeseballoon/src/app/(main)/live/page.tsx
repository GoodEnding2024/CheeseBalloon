import LiveHeader from "src/containers/live/tmpliveHeader";
import LiveList from "src/containers/live/tmpliveList";
import LiveCategory from "src/containers/live/tmpliveCategory";
import style from "src/app/(main)/live/page.module.scss";

export default function LivePage() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.header}>
          <LiveHeader />
        </div>
        <hr />
        <div className={style.search}>
          <LiveCategory />
        </div>
        <hr />
        <div className={style.live}>
          <LiveList />
        </div>
      </div>
    </div>
  );
}
