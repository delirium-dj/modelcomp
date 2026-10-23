# GLM 4.7 Flash — findings by GLM 5.3

- Source: Z.ai (`opencode/glm-4.7-flash`, HF `zai-org/GLM-4.7-Flash`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.7 Flash
- **Short description:** Z.ai's 30B-A3B MoE lightweight model (January 2026), positioned as the strongest model in the 30B class — an open-weights (MIT) efficiency tier balancing performance and deployment cost; text-only reasoning sibling of the GLM-4.7 flagship.
- **Provider / access:** Z.ai Open Platform (`glm-4.7-flash`, Free tier); vLLM/SGLang/transformers local serving (official recipes); Hugging Face weights `zai-org/GLM-4.7-Flash`. Note: the live OpenCode Zen models endpoint (2026-10-23) no longer serves a `glm-4.7-flash` id — the curated "Free on Zen" note is stale; free access is via the Z.ai platform.
- **Release / knowledge:** released 2026-01-19 (AA, models.dev, HF collection).
- **IDs:** `opencode/glm-4.7-flash` (curated; Zen route currently absent), Z.ai `glm-4.7-flash`, HF `zai-org/GLM-4.7-Flash`.
- **Context window:** **200,000 total; 131,072 max output** (AA, BenchLM, models.dev — three independent sources). The curated meta's "1M" claim is contradicted by all three and is corrected here; 200K is the verified figure.
- **Modalities:** text in; text out; reasoning (Preserved Thinking mode for agentic tasks); tool calling (vLLM `--tool-call-parser glm47`); text-only — no image input (AA explicitly confirms).
- **Pricing (as of 2026-10-23):** Free on the Z.ai developer platform (official pricing docs, fetched 2026-10-23); median across API providers $0.07 in / $0.40 out (AA); the faster sibling GLM-4.7-FlashX is $0.07/$0.40 on Z.ai.
- **Architecture:** 31.2B total / 3B active sparse MoE (HF: 31B params BF16; AA: 31.2B/3B); MIT license, open weights; 971K downloads/month on HF.

### Raw benchmarks found

> All capability rows are from the official HF model card's benchmark table (vs Qwen3-30B-A3B-Thinking-2507 and GPT-OSS-20B in the 30B/open-small class), cross-checked against BenchLM and AA. Conflicts are listed side by side.

Agent / tool use:

- τ²-Bench: **79.5%** (official card, Preserved Thinking on; class peers: Qwen3-30B-A3B 49.0%, GPT-OSS-20B 47.7%) — vendor-measured with disclosed params (temp 0, domain fixes applied)
- BrowseComp: **42.8%** (official card; class peers: 2.29% / 28.3%)
- Terminal-Bench 2: evaluation parameters published on the card but **no score row** — no verified public score found
- Tau3 / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- AIME 2025: **91.6%** (official card; peers 85.0 / 91.7)
- GPQA: **75.2%** (official card; peers 73.4 / 71.5)
- HLE: **14.4%** (official card; peers 9.8 / 10.9)
- AA Intelligence Index: **15 (estimated — independent evaluation forthcoming)** per AA (page deprecated since GLM-5's launch; AA still lists #18/141 among small open-weight reasoning models)
- BenchLM overall: **39.05, #149 of 991** (4/705 benchmarks covered)

Coding:

- SWE-bench Verified: **59.2%** (official card; peers 22.0% / 34.0% — a 2.7× lead over the 30B class)
- LiveCodeBench v6: **64.0%** (official card; peers 66.0 / 61.0)

Long context:

- No MRCR/RULER/LCR figure published — no verified public score found; 200K window verified structurally only.

Speed (AA, median across providers): 88.2 output tok/s; TTFT 1.24s.

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-Bench 79.5% and BrowseComp 42.8% are outstanding within the 30B class (peers 49.0/2.29), measured by the vendor with disclosed parameters; capped by the absence of any Terminal-Bench, Tau3, or independent agentic row (AA's suite not yet run — its Index is only an estimate).
- **Reasoning: 68/100.** AIME 2025 91.6% is frontier-class math; capped by GPQA 75.2% (mid band) and HLE 14.4% (weak), with the AA Intelligence Index only estimated at 15.
- **Context window: 70/100.** Verified 200K total / 131K out (meta's 1M claim corrected); 200K = 70 on the tier ladder; no retrieval benchmark published.
- **Multimodal: 15/100.** Text-only in/out (AA confirms no image input).
- **Coding: 72/100.** SWE-bench Verified 59.2% is exceptional for 30B (2.7× the class peers) though mid in absolute terms (frontier ref 74%+); LiveCodeBench v6 64.0% is solidly mid; no DeepSWE/SciCode rows.
- **Cost efficiency: 100/100.** $0/$0 on the evaluated Z.ai free tier (verified on the official price sheet today); even the paid provider median ($0.07/$0.40) would score ~97.
- **Overall Score: 60/100.** (76+68+70+15+72)/5 = 60.2 → 60. Best-fit recommendation: the strongest free/open 30B-class agent-coding model — best-in-class τ² and SWE-bench Verified for its size, but text-only, 200K-capped, and mid in absolute reasoning headroom.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-23
- Method: public internet research (official Hugging Face model card incl. benchmark table, BenchLM tracker, Artificial Analysis model page, official Z.ai pricing docs, models.dev, live OpenCode Zen models endpoint); scores are normalized 1–100 interpretations, not official vendor scores. Vendor-card numbers are labelled; the curated meta's 1M context claim is corrected to the verified 200K.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
