# MAI-Code-1-Flash — findings by Ernie 5.5 Flash

- Source: Microsoft (`mai-code-1-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash (Microsoft AI)
- **Short description:** Microsoft's small, fast coding specialist built around GitHub Copilot and VS Code workflows, with adaptive thinking (concise on easy requests, deeper budget on repository changes); Microsoft reports it beats Claude Haiku 4.5 on several coding benchmarks at lower token cost.
- **Provider / access:** GitHub Copilot / Microsoft AI APIs (API-only; no open weights). Superseded on all Copilot surfaces on 2026-09-10 by MAI-Code-1.1-Flash, a prompt-compatible drop-in replacement.
- **Release / knowledge:** 2026-06-02; retired from Copilot surfaces 2026-09-10; knowledge cutoff not published.
- **IDs:** `mai-code-1-flash` (Microsoft), `microsoft/mai-code-1-flash` (BenchmarkList)
- **Context window:** 256,000 tokens (vendor model card via APIMart/BenchmarkList).
- **Modalities:** text in / text out (text-to-text coding model, no image input; the 1.1 refresh added native image input).
- **Pricing (as of 2026-11-12):** no per-token PAYG rate published by Microsoft; served through GitHub Copilot subscriptions and Microsoft API surfaces (BenchmarkList: "Price not published").
- **Architecture:** sparse Mixture-of-Experts, 137B total parameters with ~5B active; proprietary, clean-room licensed training data.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.8%** (rank 20/68, 72nd percentile; vendor model card)
- Terminal-Bench 2.1: **51.7%** (rank 81/198, 59th percentile; vendor model card)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- AIME 2026: **92.5%** (rank 27/38, 30th percentile; vendor model card)
- IFBench: **75.0%** (instruction following, 100th percentile in a 1-model field)
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **not ranked** (coding specialist, no composite index published)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **71.6%** (rank 42/59, 29th percentile; vendor card)
- SWE-bench Pro: **51.2%** (rank 53/62, 15th percentile)
- SWE-bench Multilingual: **65.5%** (rank 49/56, 13th percentile)
- ArtifactsBench: **36.4%** (rank 8/8, 0th percentile — weakest area)
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks figures published; the 256K window is vendor-stated.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.0 54.8% and 2.1 51.7% are solid agentic-terminal numbers for a small model; no Tau3, GDPval or MCP rows caps it.
- **Reasoning: 68/100.** AIME 2026 92.5% shows strong math, and IFBench 75.0 is good instruction following, but there is no GPQA/HLE/Index figure and the model is explicitly a coding specialist.
- **Context window: 74/100.** 256,000 tokens, inside the 200K–500K band; no retrieval evidence.
- **Multimodal: 15/100.** Text-to-text only (the 1.1 refresh is the version with native image input).
- **Coding: 74/100.** SWE-bench Verified 71.6% and Multilingual 65.5% are genuinely strong, offset by SWE-bench Pro 51.2% and ArtifactsBench 36.4% (last of 8 models) — a capable everyday-coding model, not a frontier one.
- **Cost efficiency: 60/100.** No published token price; distributed through Copilot subscriptions, so the marginal cost is bundled rather than metered. Scored mid-band for an unknown but non-free route; not counted toward Overall.
- **Overall Score: 59/100.** Mean of tool use 65, reasoning 68, context 74, multimodal 15, coding 74. Best fit: high-volume everyday coding assistance inside GitHub Copilot/VS Code; not a general assistant, and superseded by MAI-Code-1.1-Flash (72.6% SWE-bench).

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (Microsoft MAI-Code-1-Flash model card, BenchmarkList rows, APIMart specs, Hokai 1.1 comparison); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Microsoft — MAI-Code-1-Flash model card (PDF)](https://microsoft.ai/pdf/MAI-Code-1-Flash-Model-Card.PDF)
  - [BenchmarkList — MAI-Code-1-Flash (8 first-party rows)](https://benchmarklist.com/models/microsoft-mai-code-1-flash/)
  - [LLM-Stats — MAI-Code-1-Flash](https://llm-stats.com/models/mai-code-1-flash)
  - [APIMart — MAI-Code-1-Flash specs (137B/5B MoE, 256K)](https://apimart.ai/blog/mai-code-1-flash-microsoft-code-model)
  - [Hokai — MAI-Code-1.1-Flash (successor, 72.6% SWE-bench)](https://hokai.io/hub/models/mai-code-1.1-flash)