# GPT-6.1 Sol (Max) — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-6.1-sol`, reasoning tier "max")
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (Max) — top reasoning-effort variant of the GPT-6.1 Sol release
- **Short description:** OpenAI's flagship reasoning model released September 29, 2026, offered in five reasoning-effort tiers (low/medium/high/xhigh/max). Max is the highest-intelligence tier of the release; general-purpose reasoning, agentic work, and coding.
- **Provider / access:** OpenAI first-party API (Chat Completions / Responses API); also available via 6 API providers per Artificial Analysis.
- **Release / knowledge:** Released 2026-09-29; knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-6.1-sol` (max effort). Related effort tiers: `gpt-6.1-sol-xhigh`, `gpt-6.1-sol-high`, `gpt-6.1-sol-medium`, `gpt-6.1-sol-low`. No Free ID known on Zen.
- **Context window:** 1M tokens total (verified via Artificial Analysis model page technical specifications); max output not separately disclosed.
- **Modalities:** text + image input; text output; reasoning yes (extended thinking); tool calls yes (agentic evals in Intelligence Index); JSON mode not verified.
- **Pricing (as of 2026-10-01):** $2.00 / 1M input, $10.00 / 1M output (OpenAI API, via Artificial Analysis). Cache discount 95%; blended price ~$1.47 / 1M tokens (7:2:1 cache/input/output ratio). No free tier.
- **Architecture:** proprietary; parameters not disclosed.

### Raw benchmarks found

> Individual Artificial Analysis evaluation scores for this model are marked "Not publicly available" on its model page as of 2026-10-01; only the composite Intelligence Index, speed, cost, and spec data below are verified. SWE-bench, GPQA Diamond, HLE, Terminal-Bench, Tau, and MRCR individual numbers: no verified public score found for this exact model/ID at research time.

Agent / tool use:

- Terminal-Bench 4.0: no verified public score found (individual AA eval not public)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found (individual AA eval not public)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Artificial Analysis Intelligence Index (includes agentic evals AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0): **52** (source: Artificial Analysis, rank #11 of 223 reasoning-class models)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found (individual AA eval not public)
- LCR / MLCR: no verified public score found (individual AA eval not public)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **52** (Artificial Analysis, rank #11 / 223; median for class: 26). Effort tiers: xhigh 51, high 50, medium 48, low 42.
- Omniscience Accuracy / Hallucination Rate: no verified public score found (individual AA eval not public)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found (individual AA eval not public)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found
- Composite proxy: AA Intelligence Index 52 (rank #11 / 223) includes SciCode and Terminal-Bench 4.0 as components.

Long context:

- No long-context retrieval reported (AA-LCR individual score not public; 1M window stated but retrieval at length unverified).

Speed / cost / other verified measurements (Artificial Analysis, 2026-10-01):

- Output speed: **66.2 tok/s** (OpenAI API; class median 72.1) — slower than average.
- Time to first token: **272.81s** on the max reasoning setting (class median 3.99s) — extreme thinking latency at max effort.
- Cost per Intelligence Index task: **$0.72** (max effort; low effort $0.13, medium $0.21, high $0.32, xhigh $0.39).
- Verbosity: 67M output tokens across the Intelligence Index (fairly concise vs 82M median).

### Normalized scores (1–100)

- **Tool use: 80/100.** AA Intelligence Index 52 at rank #11/223 with four agentic evals as components implies strong agentic/tool capability; interpolation on the methodology anchors (Index 35→~65, 60→~90) gives ~82, docked 2 pts because no individual Terminal-Bench/Tau/GDPval numbers are publicly verifiable for this ID. Capped by the missing individual tool benchmarks.
- **Reasoning: 83/100.** AA Intelligence Index 52 (rank #11 / 223, top ~5% of reasoning class; median 26) maps to ~83 on the methodology anchors (Index 60+ → 90–100). Capped by no public GPQA/HLE/LCR individual scores to confirm frontier-level reasoning.
- **Context window: 95/100.** 1M-token context window (verified spec) puts it in the ≥1M tier (95–100); scored 95 rather than 100 because no measured ≥98% retrieval at 512K+ is publicly available.
- **Multimodal: 65/100.** Text + image input, text-only output (verified AA spec) → 60–70 band; no video/PDF/audio input verified, no non-text output.
- **Coding: 78/100.** No public SWE-bench/LiveCodeBench/SciCode numbers for this exact ID; rank #11/223 on the composite (which includes SciCode + Terminal-Bench 4.0) suggests strong coding, but with zero verified coding-specific scores the estimate stays ~78 rather than frontier 90+. Capped by missing coding benchmarks.
- **Cost efficiency: 75/100.** $2.00/$10.00 per 1M (blended ~$1.47, cache discount 95%) and $0.72 per Intelligence Index task — between the methodology anchors (~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60); generous cache discount nudges to 75. No free tier. Excluded from Overall.
- **Overall Score: 80/100.** (80 + 83 + 95 + 65 + 78) / 5 = 80.2 → 80. Best-fit recommendation: a top-5% reasoning/agentic model for hard problems where a 1M window and image input matter — but budget for very slow max-effort latency (TTFT ~273s) and paid-only pricing; the high/medium tiers are far better value ($0.13–$0.32/task).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (Artificial Analysis model + release pages, verified 2026-10-01); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
