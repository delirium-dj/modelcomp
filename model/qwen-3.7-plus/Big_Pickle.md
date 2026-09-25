# Qwen3.7 Plus — findings by Big Pickle

- Source: Alibaba (`alibaba/qwen3.7-plus`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Plus (cost-effective tier of the Qwen3.7 series; no "Free" tier)
- **Short description:** Alibaba's budget-plus flagship closed model — a reasoning, multimodal, agent-capable tier that sits between Qwen3.7 Flash and Qwen3.7 Max. It keeps the series' text quality while upgrading vision-language ability, and the vendor explicitly positions it for coding, tool use and productivity workflows. Not an alias: distinct checkpoint, distinct price band, distinct benchmarks from both Qwen3.7 Max and Qwen3.8 Max.
- **Provider / access:** Alibaba Cloud Model Studio — OpenAI-compatible Chat Completions at `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` (also `dashscope.aliyuncs.com` for the China region), model ID `qwen3.7-plus` with pinned snapshot `qwen3.7-plus-2026-05-26`; multi-region endpoints (US Virginia, Japan Tokyo, Singapore, Germany Frankfurt, China Beijing, Hong Kong). Also routed via OpenRouter (`qwen/qwen3.7-plus`) and OpenCode Go (`qwen3.7-plus`). Chat Completions — no Responses API.
- **Release / knowledge:** 2026-06-01 (AA and Alibaba both give June 2026; the snapshot ID is dated 2026-05-26); knowledge cutoff not published.
- **IDs:** `qwen3.7-plus` and `qwen3.7-plus-2026-05-26` (Model Studio); `qwen/qwen3.7-plus` (OpenRouter); `qwen3.7-plus` (OpenCode Go). No Zen Free ID — paid on every route found.
- **Context window:** 1,000,000 tokens. Alibaba's own limits: max input 991,808 and max output 131,072 (thinking mode: input 983,616, output 131,072, max chain-of-thought 262,144). models.dev's OpenCode Go entry caps it more conservatively at 1,000,000 in / 65,536 out. AA independently measures 1M.
- **Modalities:** text, image and video in; text out; reasoning (thinking mode, up to 262K CoT); function calling, structured outputs (JSON schema), web search, prefix completion, context caching supported; fine-tuning and batch inference not supported on this snapshot.
- **Pricing (as of 2026-09-25):** Alibaba global list price, input ≤ 256K: **$0.40 in / $1.60 out** per 1M, implicit cache $0.08, explicit cache create $0.50 / read $0.04 (80% cache discount). The 256K–1M input band triples to $1.20 in / $4.80 out. China region is CNY 2 / 8 (≤256K) and CNY 6 / 24 (256K–1M). OpenCode Go and OpenRouter both list $0.32 in / $1.28 out (OpenRouter, promo-adjusted) and $0.40 / $1.60 respectively. AA blended (7:2:1) $0.30 per 1M, $0.30 per Intelligence Index task. Paid — no free tier and no data-usage caveat.
- **Architecture:** proprietary — closed weights, parameter count not disclosed by Alibaba or AA. Multimodal input stack, no open-weights release.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **70.3%**
- Terminal-Bench 2.1 (Vals harness): **52.8%**
- Claw-Eval: **62.7%** (harness per BenchLM) — one of the few verified Claw-Eval numbers in this dataset, so it is directly comparable
- QwenClawBench (Alibaba in-house): **61.8%**
- MCP Atlas: **73.2%**
- BFCL v4 (function calling): **72.9%**
- Tau2-Bench: **93%**
- GDPval-AA: **886 Elo**; normalised **12.8%** (BenchLM) — both the weakest tool-side signal
- AA Agentic Index: **19.7%**
- OSWorld-Verified: **73.3%**; AndroidWorld: **81.0%**; OSWorld 2.0: **2.8%** (a near-total failure on the newer harness)
- APEX-Agents-AA: **22.4%**; QwenWebBench: 1536 Elo; VITA-Bench: 45.6%; DeepPlanning: 62.3%

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (BenchLM aggregate; AA's own harness reports 90.0%)
- HLE: **34.7%** (AA harness 35.6%)
- CritPt: **9.1%**
- AA-LCR v1.1: **73.0%**
- MRCR v2: **91.7%** — the measured long-context retrieval number
- Artificial Analysis Intelligence Index: **25.2** (BenchLM); AA page rounds to **25**, **#25 of 174** in its reasoning-model/$0.15–$1-per-1M price class
- AA-Omniscience Index / Accuracy / Hallucination Rate: **1.1 / 22.5% / 27.7%** — low raw accuracy but a genuinely low hallucination rate, i.e. it declines rather than fabricates
- IFEval: **94.6%**; IFBench: **79.1%**; AA-IFBench: **78.0%**
- Math: HMMT Feb 2026 **92.9%**, IMOAnswerBench **86.0%**, Apex **22.7%**

Coding:

- SWE-bench Verified: **77.7%**
- SWE-bench Pro: **57.6%**
- SWE-bench Multilingual: **75.8%**
- LiveCodeBench: **89.6%**
- SciCode: **51.3%**; AA-SciCode: **46.1%**
- AA Coding Index: **55.9%**
- NL2Repo: **41.1%**
- Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- MRCR v2: **91.7%** at 1M context — the best verified long-context retrieval evidence in this report. AA-LCR v1.1 **73.0%** corroborates; no RULER or GraphWalks number published.

Multimodal (for the multimodal score):

- MMMU-Pro: **79.0%** (AA-MMMU-Pro 80.5%), MathVision 90.3%, CharXiv 85.9%, OmniDocBench 1.5 91.4%, OCRBench V2 70.7%, Video-MME (with subtitles) 88.0%, VideoMMMU 85.4%, MLVU 87.4%, RealWorldQA 86.9%, ScreenSpot Pro 79.0%, SimpleVQA 81.7%

Other measured facts:

- Output speed **70.1 tok/s** on Alibaba's API; TTFT 2.23s; 130M output tokens across the AA Index run (verbose vs 85M class median).

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.0 at 70.3%, τ²-bench 93%, Claw-Eval 62.7%, MCP Atlas 73.2%, BFCL v4 72.9% and OSWorld-Verified 73.3% / AndroidWorld 81.0% show genuinely broad agentic competence across desktop, mobile, function-calling and MCP surfaces; capped well below the 90s by Terminal-Bench 2.1 at only 52.8%, GDPval-AA 886 Elo, an AA Agentic Index of 19.7% and a 2.8% on OSWorld 2.0 — the harness upgrade hurts more than the TB 2.0 headline suggests.
- **Reasoning: 80/100.** GPQA Diamond 90.3% is at the frontier reference, HLE 34.7% and AA-LCR 73.0% are high, MRCR v2 91.7% shows it reasons well over a 1M window, and IFEval 94.6% / IFBench 78.0% mean it follows instructions tightly; capped by an AA Intelligence Index of only 25.2 and an Omniscience accuracy of 22.5% — it will decline (hallucination rate 27.7%) rather than answer, which is honest but low-yield.
- **Context window: 96/100.** 1,000,000 tokens with a verified **91.7% MRCR v2** at that window puts it in the ≥1M tier; scored 96 rather than 100 because the methodology reserves 100 for ≥98% retrieval at 512K+, and 91.7% falls short of that bar.
- **Multimodal: 88/100.** Native text + image + video in with MMMU-Pro 79.0%, Video-MME 88.0%, OmniDocBench 1.5 91.4% and MathVision 90.3% confirming real visual/document competence; held at 88 inside the 75–90 "+video/PDF in" band because output is text-only and MMSearch-Plus (41.4%) shows retrieval-grounded visual QA is the weak spot.
- **Coding: 79/100.** SWE-bench Verified 77.7%, SWE-bench Pro 57.6%, SWE Multilingual 75.8% and LiveCodeBench 89.6% are strong for a $0.40/$1.60 tier, and SciCode 51.3% beats the mid-band ceiling; capped because AA-SciCode is 46.1%, AA Coding Index 55.9% is short of the 70% frontier threshold, and no DeepSWE or Vibe Code Bench number exists to corroborate.
- **Cost efficiency: 93/100.** $0.40 in / $1.60 out with an 80% cache discount ($0.04 explicit cache read) and a $0.30 blended rate beats the ~$0.60/$2.20 ≈ 92 reference point; no free tier, so it cannot reach the 97–99 band.
- **Overall Score: 84/100.** (76 + 80 + 96 + 88 + 79) / 5 = 83.8 → 84. Best fit: high-volume 1M-context, multimodal, vision-plus-tooling production workloads on a tight budget — the rare budget tier that does not collapse on GPQA or long-context retrieval; just do not make it your primary autonomous agent on the newest terminal harnesses.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-25
- Method: public internet research (Alibaba Cloud Model Studio model docs, Artificial Analysis model page, BenchLM model page, models.dev API catalog, OpenCode Go / OpenRouter listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Plus.md`, using the same headings.
