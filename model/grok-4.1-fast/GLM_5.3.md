# Grok 4.1 Fast — findings by GLM 5.3

- Source: xAI (`xai/grok-4-1-fast-reasoning`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's high-speed agentic tool-calling model, launched 2025-11-19 alongside the Agent Tools API — positioned by xAI as "our best tool-calling model", built for real-world customer-support, finance, and deep-research agents. Now a legacy model: Oracle and Google Cloud partner docs mark it deprecated in favor of Grok 4.2/4.3, and it is absent from the current docs.x.ai lineup (current flagship Grok 4.7).
- **Provider / access:** xAI API (Anthropic-style `docs.x.ai`; served via `https://api.x.ai`), OpenRouter `x-ai/grok-4.1-fast`, Microsoft Copilot Studio, Google Cloud (Gemini Enterprise Agent Platform), Oracle OCI. No OpenCode Zen listing.
- **Release / knowledge:** released 2025-11-19 (xAI launch post; benchable.ai concurs); knowledge cutoff not published.
- **IDs:** `grok-4-1-fast-reasoning` (maximal intelligence) and `grok-4-1-fast-non-reasoning` (instant responses) on the xAI API; `x-ai/grok-4.1-fast` on OpenRouter.
- **Context window:** 2,000,000 tokens (xAI launch post + OpenRouter) — trained via long-horizon RL for consistent multi-turn performance across the full window.
- **Modalities:** text in / text out only (no image input published for this ID); two variants with and without reasoning; native tool calls; Agent Tools API (web search, X search, remote code execution, document collections search, MCP).
- **Pricing (at launch, per xAI):** $0.20 input / $0.05 cached input / $0.50 output per 1M tokens; tool calls from $5 per 1,000 successful invocations.
- **Architecture:** undisclosed parameter count; RL-trained in simulated environments across dozens of tool domains; hallucination rate cut roughly in half vs Grok 4 Fast per xAI (Oracle docs summarize ~3x fewer than Grok 4 Fast lineage).

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom: **100%** (xAI launch post; independent evaluation verified by Artificial Analysis)
- Berkeley Function Calling v4: **72% overall accuracy** (xAI launch post; vs Gemini 3 Pro estimated)
- Research-Eval Reka: **63.9** at $0.046 avg cost (vs GPT-5 45.5, Claude Sonnet 4.5 41.2, Gemini 3 Pro 55.9 — xAI launch post)
- FRAMES: **87.6** (vs GPT-5 86.0, Sonnet 4.5 85.0, Gemini 3 Pro 90.9 — xAI launch post)
- X Browse: **56.3** (internal multihop X-search benchmark; GPT-5 24.2, Sonnet 4.5 14.6, Gemini 3 Pro 26.5)
- Terminal-Bench 2.1: **no verified public score found**
- GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- FActScore: on par with Grok 4 (vendor claim, no number published)
- Artificial Analysis Intelligence Index: **no verified public score found** (no dedicated AA page found for this ID)
- Omniscience Accuracy / Hallucination Rate: no published number; vendor states the hallucination rate is halved vs Grok 4 Fast

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- No formal MRCR / RULER score exists; vendor charts (no numbers) claim consistent multi-turn accuracy across the 2M-token window; window itself verified at 2,000,000 tokens.

### Normalized scores (1–100)

- **Tool use: 80/100.** Tau2-Bench Telecom 100% (AA-verified) and BFCL-v4 72% are strong, and the agentic-search suite (Research-Eval 63.9, FRAMES 87.6, X Browse 56.3) leads its launch cohort; the absence of any GDPval, Terminal-Bench, or Claw-Eval row caps it below the 90–100 frontier band.
- **Reasoning: 65/100.** No public GPQA/HLE/Index numbers exist for this speed-tuned variant; FRAMES 87.6 factuality-retrieval and FActScore parity with Grok 4 provisionally support mid-tier reasoning, explicitly capped by the missing formal rows.
- **Context window: 95/100.** Verified 2,000,000-token window sits in the ≥1M tier (95–100); no measured ≥98% retrieval at 512K+ exists, so not 100 — long-horizon RL consistency is a vendor claim.
- **Multimodal: 15/100.** Text-only input and output for this ID — no image, audio, or video input is published anywhere in the launch post, OpenRouter listing, or partner docs.
- **Coding: 60/100.** No verified public coding benchmark exists for this exact ID (it targets tool-calling agents, not SWE); provisional mid score from its agentic task competence and Grok-family lineage, capped hard by zero coding rows.
- **Cost efficiency: 95/100.** $0.20 / $0.50 per 1M with $0.05 cached reads is just above the ~$0.10/$0.20 near-free reference band.
- **Overall Score: 63/100.** Half-up mean of the five quality dims (80+65+95+15+60)/5 = 63 — a very cheap 2M-context text-only tool-calling specialist; skip it for multimodal or benchmark-verified frontier work (it is deprecated on several clouds).

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-03
- Method: public internet research (xAI launch post with AA-verified τ²-bench figure, OpenRouter listing, Oracle/Google Cloud partner docs); scores are normalized 1–100 interpretations, not official vendor scores. Reasoning/Coding dims are provisional — no verified public rows exist for them.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
