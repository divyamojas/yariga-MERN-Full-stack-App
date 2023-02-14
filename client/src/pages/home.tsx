import { Box, Stack, Typography } from "@pankod/refine-mui";
import { PieChart, PropertyReferrals, TotalRevenue } from "components";
import React from "react";

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Property for sale"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Property for rent"
          value={550}
          series={[60, 40]}
          colors={["#47abe8", "#e4b8ef"]}
        />
        <PieChart
          title="Total customers"
          value={5684}
          series={[75, 25]}
          colors={["#275be8", "#24e8ef"]}
        />
        <PieChart
          title="Total Cities"
          value={565}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </Box>
      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
};

export default home;
