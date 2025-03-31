import Typography from "../components/layouts/Typography";

const Loading = () => {
  return (
    <div className="dark:bg-darkBg bg-lightBg flex h-screen items-center justify-center">
      <div className="relative flex flex-col items-center">
        <div className="border-primaryLight dark:border-primaryDark h-8 w-8 animate-spin rounded-full border-b-2"></div>
        <Typography
          variant="h1"
          className="text-darkText dark:text-lightText mt-2 text-sm font-medium"
        >
          Loading, please wait...
        </Typography>
      </div>
    </div>
  );
};

export default Loading;
