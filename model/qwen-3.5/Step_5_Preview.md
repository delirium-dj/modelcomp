# Qwen 3.5 — findings by Step 5 Preview

- Source: Alibaba Qwen (Qwen 3.5 flagship generation, 2026; weights `Qwen/Qwen3.5-397B-A17B`, hosted as Qwen3.5-Plus)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 (Alibaba's Qwen 3.5 flagship generation — the family namesake; this roster entry is a family-level proxy, tracked tier unconfirmed per the model meta)
- **Short description:** The launch that made Qwen a native-multimodal family: the first release was **Qwen3.5-397B-A17B** (2026-02-16) — a 397B/17B-active MoE on the Qwen3-Next architecture (Gated DeltaNet + Gated Attention hybrid, 512 experts, MTP multi-step) trained with **early fusion on multimodal tokens**, unifying the previously separate Qwen3 (text) and Qwen3-VL (vision) lines — followed within eight days by 122B-A10B / 35B-A3B / 27B, and on 2026-03-02 by 9B / 4B / 2B / 0.8B. Every size is Apache 2.0 with 262,144 native context (extensible to ~1.01M via YaRN) and 201 languages. Alibaba's claim is that the 397B beats GPT-5.2, Claude 4.5 Opus and Gemini-3 Pro somewhere on **28 of 44 vision benchmarks**, with the flagship's decoding running 8.6×/19.0× faster than Qwen3-Max at 32K/256K context. The 9B is the standout efficiency story: it beats gpt-oss-120B — 10× its size — on most language tasks.
- **Provider / access:** Open weights (Apache 2.0) on Hugging Face / ModelScope; hosted as Qwen3.5-Plus (1M context default, built-in tools) and Qwen3.5-Flash via Alibaba Cloud Model Studio.
- **Release:** 2026-02-16 (flagship), 2026-02-24 (122B/35B/27B), 2026-03-02 (9B/4B/2B/0.8B).
- **Context window:** 262,144 tokens native (1,010,000 with YaRN); 64K max output (open weights).
- **Modalities:** Text, image and video in → text out (native vision-language, early fusion).
- **Pricing (as of 2026-10-09):** weights free (Apache 2.0); hosted Qwen3.5-Plus ~$0.40–0.60/M input, $2.00–3.60/M output (Qwen3.5-Flash $0.10/$0.40).
- **Note on this entry:** this is a family-proxy report — the tracked tier is unconfirmed, so the flagship's numbers stand in for the family; see `../qwen-3.5-397b/Step_5_Preview.md` for the dedicated 397B write-up.

### Raw benchmarks found

Flagship (Qwen3.5-397B-A17B, vendor model card; GPT-5.2 / Claude 4.5 Opus / Gemini-3 Pro in parents):

Knowledge & instruction:

- MMLU-Pro: **87.8** (87.4 / 89.5 / 89.8); MMLU-Redux: 94.9; SuperGPQA: 70.4; C-Eval: 93.0
- IFEval: 92.6; IFBench: **76.5** (75.4 / 58.0 / 70.4); MultiChallenge: **67.6** (57.9 / 54.2 / 64.2)

Long context:

- AA-LCR: 68.7 (GPT-5.2 72.7, Opus 74.0); LongBench v2: **63.2** (54.5 / 64.4 / 68.2)

Reasoning:

- GPQA Diamond: **88.4** (92.4 / 87.0 / 91.9); HLE: 28.7 (35.5 / 30.8 / 37.5); HLE-Verified: 37.6
- LiveCodeBench v6: 83.6 (87.7 / 84.8 / 90.7); HMMT Feb 94.8 / Nov 92.7; IMOAnswerBench 80.9; AIME26 91.3

Agentic:

- BFCL-V4: **72.9** (63.1 / 77.5 / 72.5); TAU2-Bench: **86.7** (87.1 / 91.6 / 85.4); VITA-Bench: 49.7; DeepPlanning: **34.3** (44.6 / 33.9 / 23.3); Tool Decathlon: **38.3** (43.8 / 43.5 / 36.4); MCP-Mark: 46.1
- BrowseComp: **69.0** (simple ctx-folding) / 78.6 (discard-all); BrowseComp-zh 70.3; WideSearch: 74.0; HLE w/ tools: 48.3

Coding:

- SWE-bench Verified: **76.4** (80.0 / 80.9 / 76.2); SWE-Multilingual: 69.3; SecCodeBench: **68.3**; Terminal-Bench 2: 52.5

Vision (native multimodal):

- MMMU: **85.0**; MMMU-Pro: **79.0**; MathVision: **88.6**; MathVista mini: **90.3**; We-Math: 87.9; DynaMath: 86.3; OmniDocBench 1.5: **90.8**; CharXiv RQ: 80.8; OCRBench: 93.1; CountBench: 97.2; VideoMME: **87.5** (w/ subs); MLVU: 86.7; OSWorld-Verified: 62.2; ScreenSpot-Pro: 65.6

Base-model checkpoints: MMLU 88.61, MMLU-Pro 76.01, SuperGPQA 57.96 (vs Qwen3-235B 42.84), MATH 74.14, SWE-agentless **43.26** (K2 28.54, GLM-4.5 29.23).

Efficiency: decoding throughput 8.6×/19.0× Qwen3-Max at 32K/256K; 3.5×/7.2× Qwen3-235B-A22B.

### Normalized scores (1–100)

- **Tool use: 68/100.** BFCL-V4 72.9%, TAU2 86.7%, Tool Decathlon 38.3%, MCP-Mark 46.1%, BrowseComp 69.0–78.6% and WideSearch 74.0% — a good open-weights agentic profile that beats GPT-5.2 on 5 of the 6 tool evals, but MCP-Mark and Tool-Decathlon sit mid-band.
- **Reasoning: 76/100.** GPQA 88.4%, AIME26 91.3%, LCB 83.6%, HMMT ~94 and MMLU-Pro 87.8% are upper-mid-band; HLE 28.7% (37.6 verified) is the clear gap vs Gemini-3 Pro's 37.5 verified 48.0, and no ARC-AGI figure exists.
- **Context window: 76/100.** 262K native (1.01M with YaRN) is the 200K–500K band (65–84) with AA-LCR 68.7% and LongBench v2 63.2% (beating GPT-5.2 on LongBench) — good, a quarter of the 1M native norm.
- **Multimodal: 84/100.** Text + image + video in → text out is the 75–90 band, near its top: native early-fusion vision with MMMU 85.0%, MathVision 88.6%, OmniDocBench 90.8%, VideoMME 87.5%, OSWorld 62.2% and vendor wins on 28/44 vision benchmarks vs GPT-5.2/Opus/Gemini.
- **Coding: 72/100.** SWE-V 76.4%, SWE-Multi 69.3%, SecCodeBench 68.3% and LCB 83.6% are solid; Terminal-Bench 2 at 52.5% trails GPT-5.2 (54.0) and Opus (59.3), and no DeepSWE/SWE-Pro-style deep-coding number exists.
- **Cost efficiency: 93/100.** Apache-2.0 weights are free; hosted tiers at $0.40–0.60/$2.00–3.60 (Qwen3.5-Flash $0.10/$0.40) with 17B active and 8.6–19× Qwen3-Max decoding — the methodology's ~$0.6/$2.2 ≈ 92 range with the best open-weights efficiency story of early 2026.
- **Overall Score: 75/100.** Best-fit recommendation: the open-weights multimodal workhorse of early 2026 — one Apache-2.0 family from 0.8B to 397B with native vision, 262K→1M context and flagship-tier coding at flash-tier prices; superseded by Qwen3.6 (April) and Qwen3.8 (August) within six months.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Qwen GitHub/Hugging Face model cards and release log, Alibaba Cloud blog, DeepLearning.AI The Batch coverage); scores are normalized 1–100 interpretations, not official vendor scores. This entry is a family-proxy — the tracked tier is unconfirmed.
- Future sources: add a new file next to this one, e.g. `Qwen_3_6.md`, using the same headings.
