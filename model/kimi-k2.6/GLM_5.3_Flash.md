# Kimi K2.6 — findings by GLM 5.3 Flash

- Source: Kimi / Moonshot AI (`moonshotai/Kimi-K2.6`, reasoning variant)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6 (reasoning)
- **Short description:** Moonshot AI's open-weight trillion-parameter MoE reasoning model (1T total / 32B active), released April 20, 2026. General reasoning, agentic work, and multimodal (image/video) understanding. Now superseded by Kimi K3 — Artificial Analysis marks this model deprecated and only continues benchmarking on the default 10k-input workload.
- **Provider / access:** Kimi first-party API + 14 API providers per Artificial Analysis; self-hosting via Hugging Face. Chat Completions-style API.
- **Release / knowledge:** Released 2026-04-20; knowledge cutoff not disclosed.
- **IDs:** `kimi/kimi-k2.6` (state: no Free ID verified on Zen at research time).
- **Context window:** 256K tokens total (verified via Artificial Analysis technical specifications; FAQ rounds to 260k). Max output not separately disclosed.
- **Modalities:** text + image + video input; text output; reasoning yes; tool calls yes (agentic evals in Intelligence Index); JSON mode not verified.
- **Pricing (as of 2026-10-01):** $0.95 / 1M input, $4.00 / 1M output (Kimi API, via Artificial Analysis). Cache discount 83%; blended price ~$0.70 / 1M tokens (7:2:1 cache/input/output ratio). No free tier verified.
- **Architecture:** 1T total params / 32B active (MoE); open weights under Modified MIT license (commercial use allowed with restrictions); weights at https://huggingface.co/moonshotai/Kimi-K2.6.

### Raw benchmarks found

> Individual Artificial Analysis evaluation scores are marked "Not publicly available" on the model page as of 2026-10-01; the composite Intelligence Index, speed, cost, and spec data below are verified. Terminal-Bench, Tau, GPQA, HLE, SWE-bench, MRCR individual numbers: no verified public score found for this exact model/ID at research time.

Agent / tool use:

- Terminal-Bench 4.0: no verified public score found (individual AA eval not public)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Artificial Analysis Intelligence Index (includes agentic evals AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0): **27** (source: Artificial Analysis, rank #21 of 117; open-weights similar-size median: 18)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **27** (Artificial Analysis, rank #21 / 117; median 18)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found (individual AA eval not public)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found
- Composite proxy: AA Intelligence Index 27 (rank #21 / 117) includes SciCode and Terminal-Bench 4.0 as components.

Long context:

- No long-context retrieval reported (AA-LCR individual score not public; 256K window stated but retrieval at length unverified).

Speed / cost / other verified measurements (Artificial Analysis, 2026-10-01):

- Output speed: **69.6 tok/s** (Kimi API; class median 68.6) — slightly faster than average.
- Time to first token: **3.01s** (class median 2.27s).
- Cost per Intelligence Index task: **$0.80**.
- Verbosity: 180M output tokens across the Intelligence Index — very verbose vs 140M median.

### Normalized scores (1–100)

- **Tool use: 60/100.** AA Intelligence Index 27 (rank #21/117, well above the open-weights median 18) maps to the mid band on the methodology anchors (Index 20–35 → 55–65); no individual Terminal-Bench/Tau/GDPval numbers publicly verifiable for this ID. Capped by missing individual tool benchmarks.
- **Reasoning: 60/100.** Same Index 27 → mid band (55–65); strong for open weights but no public GPQA/HLE to evidence frontier-level reasoning. Capped by missing individual reasoning benchmarks.
- **Context window: 70/100.** 256K context (verified spec) → 200K–500K tier (65–84; 200K ≈ 70); no measured long-context retrieval reported. Capped by tier and missing retrieval data.
- **Multimodal: 80/100.** Text + image + video input, text-only output (verified AA spec) → 75–90 band; no audio input and no non-text output verified.
- **Coding: 62/100.** No public SWE-bench/LiveCodeBench/SciCode numbers for this exact ID; composite Index 27 (includes SciCode + Terminal-Bench 4.0) → mid band estimate. Capped by missing coding benchmarks.
- **Cost efficiency: 85/100.** $0.95/$4.00 per 1M (blended ~$0.70, cache discount 83%) sits between the methodology anchors (~$0.60/$2.20 ≈ 92 and ~$1.25/$4.25 ≈ 88); very verbose output (180M tokens, $0.80/task) pulls it down to 85. Excluded from Overall.
- **Overall Score: 66/100.** (60 + 60 + 70 + 80 + 62) / 5 = 66.4 → 66. Best-fit recommendation: a solid open-weight MoE for image/video-in agentic work at moderate cost, but deprecated in favor of Kimi K3 — prefer K3 for new deployments.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (Artificial Analysis model page, verified 2026-10-01); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
