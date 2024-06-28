<Grid container spacing={0}>
  <Grid item xs={12} sm={6}>
    <Card
      sx={{
        backgroundColor: "white",
        color: "#1976d2",
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 400,
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
            padding: "12px 16px", // Adjust padding for top and bottom spacing
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
          sx={{ padding: "16px" }} // Add padding inside the CardContent
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
            mt={2} // Margin top to separate from previous content
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
                    size={80} // Larger size
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
                      fontSize: "0.8em", // Adjust font size if needed
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
                    size={80} // Larger size
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
                      fontSize: "0.8em", // Adjust font size if needed
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
        maxWidth: 400,
        width: "100%",
        marginLeft: { xs: 0, sm: 2 }, // Add margin left only on small screens
      }}
    >
      {" "}
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
            padding: "12px 16px", // Adjust padding for top and bottom spacing
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
          sx={{ padding: "16px" }} // Add padding inside the CardContent
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
            mt={2} // Margin top to separate from previous content
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
                    size={80} // Larger size
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
                      fontSize: "0.8em", // Adjust font size if needed
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
                    size={80} // Larger size
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
                      fontSize: "0.8em", // Adjust font size if needed
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
</Grid>;
