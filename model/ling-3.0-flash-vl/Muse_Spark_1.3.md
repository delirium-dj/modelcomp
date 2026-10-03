# Ling 3.0 Flash VL — findings by Muse Spark 1.3

- Source: inclusionAI/Ling-3.0-flash-VL
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL (Ling-3.0-flash-VL)
- **Short description:** inclusionAI (Ant Group) native multimodal MoE extending Ling-3.0-flash with image/video understanding for visual reasoning and agentic interface tasks. Open weights (MIT).
- **Provider / access:** InclusionAI API; OpenRouter (`inclusionai/ling-3.0-flash-vl`); Hugging Face `inclusionAI/Ling-3.0-flash-VL` (plus fp8/fp4 quants); ModelScope. OpenAI-compatible (Chat Completions).
- **Release / knowledge:** 2026-09-24 release (Hugging Face page date); knowledge cutoff not disclosed — no verified cutoff found.
- **IDs:** `inclusionai/ling-3.0-flash-vl` (OpenRouter); `inclusionAI/Ling-3.0-flash-VL` (Hugging Face). No verified OpenCode Zen Free ID found.
- **Context window:** 256K native (vendor docs table; 262,144 on the Artificial Analysis provider page), extendable to 1M per vendor — verified via vendor docs + AA; measured long-context retrieval only via AA-LCR (see below).
- **Modalities:** text/image/video in; text out; reasoning yes (thinking mode on by default); tool calls yes (ling3 tool-call parser, function calling); JSON mode not verified.
- **Pricing (as of 2026-10-03):** InclusionAI API $0.07 / $0.22 per 1M in/out (Artificial Analysis); OpenRouter from $0.021 / $0.0616 (NovitaAI); Puter $0.06 / $0.18. No verified Zen Free tier — scored on paid pricing.
- **Architecture:** MoE, 124B total / 5.5B active per token, open weights (MIT license).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.4%** (Artificial Analysis eval, via AI Atlas, obs. Sep 2026)
- Tau3-Banking / Tau2-Bench: **~71%** (OpenRouter provider evals: NovitaAI 72.0%, DeepInfra 71.3% — provisional, provider harness, not AA-official)
- GDPval-AA: **32.5%** (AA via OpenRouter benchmark table)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (AA; provider auto-routing eval 84.8% provisional)
- HLE: **22.0%** (AA)
- LCR / MLCR: **78.3%** (AA-LCR via OpenRouter)
- CritPt: **2.0%** (AA via OpenRouter)
- Artificial Analysis Intelligence Index / BenchLM overall: **25** (AA Index v4.3.2, current model page; vendor HF card reports 42 on Index v4.1.1 — different ruler, not comparable)
- Omniscience Accuracy / Hallucination Rate: **14.3% accuracy / 78.0% non-hallucination rate** (AA via OpenRouter)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (vendor claims open-source SOTA without publishing a number)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **44.2%** (AA)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **Coding Index 57.0, Agentic Index 28.7** (AA via OpenRouter/Puter); no verified DeepSWE number found

Long context:

- AA-LCR 78.3% (see above); no verified MRCR / RULER / GraphWalks score found; native window 256K per vendor docs.

Multimodal (supporting evidence for the Multimodal dim):

- MMMU-Pro: **79.0%** (AA)

### Normalized scores (1–100)

- **Tool use: 74/100.** TB2.1 64.4% (AA) plus Tau ~71% show solid terminal/tool execution; GDPval-AA 32.5% and missing Claw/SWE-Atlas numbers cap it below frontier (TB 88%+).
- **Reasoning: 78/100.** GPQA 86.2% near-frontier science reasoning with AA-LCR 78.3%; HLE 22.0%, current-ruler Index 25, and CritPt 2.0% cap it.
- **Context window: 74/100.** Native 256K lands in the 200K–500K tier (200K = 70); the 1M extension is claimed but unmeasured at 512K+ retrieval, which caps the score.
- **Multimodal: 82/100.** Native text/image/video in with MMMU-Pro 79.0%; text-only out (no audio in, no non-text out) caps it below 90.
- **Coding: 71/100.** SciCode 44.2% with Coding Index 57.0 is mid-table; missing SWE-bench/LiveCodeBench/DeepSWE numbers cap it below frontier (DeepSWE 74%+, SciCode 55%+).
- **Cost efficiency: 98/100.** InclusionAI $0.07/$0.22 per 1M is near-zero pricing; no verified Zen Free tier, so scored on paid pricing, one step below $0 = 100.
- **Overall Score: 76/100.** Mean of the five quality dims (74+78+74+82+71)/5 = 75.8 → 76; best fit as a cheap open-weights multimodal agent for vision-grounded tool workflows, not as a frontier coder/reasoner.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-03
- Method: public internet research (inclusionAI developer docs + HF model card 2026-09-24, Artificial Analysis model and provider pages, OpenRouter benchmark table, AI Atlas, Puter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
