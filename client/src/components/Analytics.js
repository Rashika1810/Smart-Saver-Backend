import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Grid,
} from "@mui/material";

const Analytics = ({ allTransactions }) => {
  const Categories = [
    "all",
    "tip",
    "salary",
    "bills",
    "education",
    "healthcare",
    "shopping",
    "entertainment",
    "schlorships",
    "travel",
    "groceries",
    "donation",
    "personal use",
    "food",
    "fees",
    "tax",
    "other",
  ];
  //transaction calculation
  const totalTransactions = allTransactions.length;
  const totalIncomeTransactions = allTransactions.filter(
    (transaction) => transaction.type === "Income"
  ).length;
  const totalExpenseTransactions = allTransactions.filter(
    (transaction) => transaction.type === "Expense"
  ).length;

  const totalIncomePercent =
    totalTransactions > 0
      ? Math.round((totalIncomeTransactions / totalTransactions) * 100)
      : 0;
  const totalExpensePercent =
    totalTransactions > 0
      ? Math.round((totalExpenseTransactions / totalTransactions) * 100)
      : 0;

  //total turnover
  const totalTurnOver = allTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const totalIncomeTurnOver = allTransactions
    .filter((transaction) => transaction.type === "Income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpenseTurnOver = allTransactions
    .filter((transaction) => transaction.type === "Expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomeTurnOverPercent =
    totalTransactions > 0
      ? Math.round((totalIncomeTurnOver / totalTurnOver) * 100)
      : 0;
  const totalExpenseTurnOverPercent =
    totalTransactions > 0
      ? Math.round((totalExpenseTurnOver / totalTurnOver) * 100)
      : 0;
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Card
          sx={{
            backgroundColor: "white",
            color: "#1976d2",
            borderRadius: 2,
            boxShadow: 3,
            // maxWidth: 400,
            width: "100%",
          }}
        >
          <CardContent sx={{ padding: 0 }}>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              mb={2}
              sx={{
                // width: "100%",
                backgroundColor: "#1976d2",
                color: "white",
                padding: "12px 16px",
                borderTopLeftRadius: 2,
                borderTopRightRadius: 2,
              }}
            >
              Transaction Records
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="stretch"
              sx={{ padding: "16px" }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
                sx={{
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                  pb: 1,
                }}
              >
                <Typography variant="body2">Total Transactions</Typography>
                <Typography variant="body2">{totalTransactions}</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
                sx={{
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                  pb: 1,
                }}
              >
                <Typography variant="body2" color="#209e25">
                  Total Income Transactions
                </Typography>
                <Typography variant="body2" color="#209e25">
                  {totalIncomeTransactions}
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
                sx={{
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                  pb: 1,
                }}
              >
                <Typography variant="body2" color="#f44336">
                  Total Expense Transactions
                </Typography>
                <Typography variant="body2" color="#f44336">
                  {totalExpenseTransactions}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="center"
                alignItems="center"
                mt={2}
              >
                {totalIncomePercent > 0 && (
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: 80,
                        marginBottom: { xs: 2, sm: 0 },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress
                        variant="determinate"
                        value={totalIncomePercent}
                        size={80}
                        thickness={2}
                        sx={{
                          color: "#4caf50",
                          "& .MuiCircularProgress-bar": {
                            transition: "none",
                            strokeLinecap: "round",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                          },
                        }}
                      />
                      <Typography
                        variant="caption"
                        component="div"
                        color="textSecondary"
                        sx={{
                          position: "absolute",
                          fontWeight: "bold",
                          fontSize: "0.8em",
                        }}
                      >
                        {totalIncomePercent}%
                      </Typography>
                    </Box>
                  </Grid>
                )}
                {totalExpensePercent > 0 && (
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: 80,
                        marginLeft: { sm: 2 },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress
                        variant="determinate"
                        value={totalExpensePercent}
                        size={80}
                        thickness={2}
                        sx={{
                          color: "#f44336",
                          "& .MuiCircularProgress-bar": {
                            transition: "none",
                            strokeLinecap: "round",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                          },
                        }}
                      />
                      <Typography
                        variant="caption"
                        component="div"
                        color="textSecondary"
                        sx={{
                          position: "absolute",
                          fontWeight: "bold",
                          fontSize: "0.8em",
                        }}
                      >
                        {totalExpensePercent}%
                      </Typography>
                    </Box>
                  </Grid>
                )}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card
          sx={{
            backgroundColor: "white",
            color: "#1976d2",
            borderRadius: 2,
            boxShadow: 3,
            // maxWidth: 400,
            width: "100%",
          }}
        >
          <CardContent sx={{ padding: 0 }}>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              mb={2}
              sx={{
                width: "100%",
                backgroundColor: "#1976d2",
                color: "white",
                padding: "12px 16px",
                borderTopLeftRadius: 2,
                borderTopRightRadius: 2,
              }}
            >
              Turnover Records
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="stretch"
              sx={{ padding: "16px" }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
                sx={{
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                  pb: 1,
                }}
              >
                <Typography variant="body2">Total Turnover</Typography>
                <Typography variant="body2">₹ {totalTurnOver}</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
                sx={{
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                  pb: 1,
                }}
              >
                <Typography variant="body2" color="#209e25">
                  Total Income Turnover
                </Typography>
                <Typography variant="body2" color="#209e25">
                  ₹ {totalIncomeTurnOver}
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
                sx={{
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                  pb: 1,
                }}
              >
                <Typography variant="body2" color="#f44336">
                  Total Expense Turnover
                </Typography>
                <Typography variant="body2" color="#f44336">
                  ₹ {totalExpenseTurnOver}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="center"
                alignItems="center"
                mt={2}
              >
                {totalIncomePercent > 0 && (
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: 80,
                        marginBottom: { xs: 2, sm: 0 },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress
                        variant="determinate"
                        value={totalIncomeTurnOverPercent}
                        size={80}
                        thickness={2}
                        sx={{
                          color: "#4caf50",
                          "& .MuiCircularProgress-bar": {
                            transition: "none",
                            strokeLinecap: "round",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                          },
                        }}
                      />
                      <Typography
                        variant="caption"
                        component="div"
                        color="textSecondary"
                        sx={{
                          position: "absolute",
                          fontWeight: "bold",
                          fontSize: "0.8em",
                        }}
                      >
                        {totalIncomeTurnOverPercent}%
                      </Typography>
                    </Box>
                  </Grid>
                )}
                {totalExpensePercent > 0 && (
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: 80,
                        marginLeft: { sm: 2 },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress
                        variant="determinate"
                        value={totalExpenseTurnOverPercent}
                        size={80}
                        thickness={2}
                        sx={{
                          color: "#f44336",
                          "& .MuiCircularProgress-bar": {
                            transition: "none",
                            strokeLinecap: "round",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                          },
                        }}
                      />
                      <Typography
                        variant="caption"
                        component="div"
                        color="textSecondary"
                        sx={{
                          position: "absolute",
                          fontWeight: "bold",
                          fontSize: "0.8em",
                        }}
                      >
                        {totalExpenseTurnOverPercent}%
                      </Typography>
                    </Box>
                  </Grid>
                )}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Analytics;
