# Big Pickle — averaged findings (Big Pickle + Muse Spark 1.3 + Ling 3.0)

- Sources: `Big_Pickle.md`, `Muse_Spark_1.3.md`, `Ling_3.0.md`
- Date: 2026-09-17 (UTC)
- Method: arithmetic mean of the three agents' normalized 1–100 scores per dimension. Overall = mean of the three Overall scores.
- Overview and scoring methodology: `../../model-comparison.md`

## Averaged scores (1–100)

- **Tool use: 45/100** (Big_Pickle 40, Muse_Spark_1.3 55, Ling_3.0 40)
- **Reasoning: 56.7/100** (Big_Pickle 55, Muse_Spark_1.3 60, Ling_3.0 55)
- **Context window: 70/100** (Big_Pickle 70, Muse_Spark_1.3 70, Ling_3.0 70)
- **Multimodal: 15/100** (Big_Pickle 15, Muse_Spark_1.3 15, Ling_3.0 15)
- **Coding: 63.3/100** (Big_Pickle 60, Muse_Spark_1.3 70, Ling_3.0 60)
- **Cost efficiency: 100/100** (Big_Pickle 100, Muse_Spark_1.3 100, Ling_3.0 100)
- **Overall Score: 58/100** (Big_Pickle 56, Muse_Spark_1.3 62, Ling_3.0 56)

## Agreement notes

- Largest gap is Tool use (40 vs 55): thin-evidence caution vs bench-proxy optimism on a stealth model with one real community eval.
- Coding differs by 10 for the same reason; full agreement on context, multimodal, and cost.
