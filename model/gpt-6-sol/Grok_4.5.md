# GPT-6 Sol — findings by Grok 4.5 (xAI)

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** Mid-tier OpenAI GPT-6 reasoning model released alongside GPT-6 Luna, positioned below flagship GPT-6 Astra for complex coding, agentic workflows, and professional work at lower cost. Succeeded within a week by GPT-6.1 Sol at the same price; original remains available.
- **Provider / access:** OpenAI API (`gpt-6-sol`); also ChatGPT Work/Codex (Plus/Pro/Business/Enterprise/Edu). Supports Responses API (full tools) and Chat Completions (function calling only at `reasoning_effort=none`).
- **Release / knowledge:** 2026-09-22; knowledge cutoff April 20, 2026
- **IDs:** `openai/gpt-6-sol` (no Free ID on OpenCode Zen)
- **Context window:** 1,050,000 tokens total (up to ~922k input / 128k max output); verified via OpenAI model docs and multiple secondary sources
- **Modalities:** Text + image in; text out; reasoning (none/low/medium/high/xhigh/max); tool calls (web/file search, computer use, shell, code interpreter, MCP, etc.); JSON/structured outputs
- **Pricing (as of 2026-10-10):** $2.00 input / $10.00 output per 1M tokens (short context ≤272k); cached input $0.20; cache writes $2.50; long-context (>272k) $4/$15. Paid only; free-tier privacy N/A
- **Architecture:** Proprietary closed-weights; parameter count undisclosed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.15%** (Vals AI, #6 of 73, max effort)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AutomationBench 1.0.6: **33.2%** (OpenAI, xhigh effort)
- OSWorld 2.0 offline: **60.5%** (OpenAI, xhigh effort)
  Reasoning / knowledge:
- GPQA Diamond: **94%** (Epoch AI)
- HLE: **47.9%** (Artificial Analysis, max effort); HLE-Diamond (no tools, high): **32.8%** (CAIS/Scale)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **48** (max effort, AA Index v4.3)
- Omniscience Accuracy / Hallucination Rate: **~54% accuracy / 60% hallucination** (AA, max; hallucination cut from prior gen)
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **87.82%** (Vals AI, #6–10 of ~103–110)
- DeepSWE / Coding Index / other: **68.8%** (DeepSWE v1.1, OpenAI max effort); AA Coding Agent Index **57** (max)
  Long context:
- no long-context retrieval reported (MRCR/RULER/GraphWalks)

### Normalized scores (1-100)

- **Tool use: 78/100.** Strong Terminal-Bench 2.1 (83.15%) and solid AutomationBench/OSWorld agent results place it in upper-mid/frontier-adjacent; capped by absence of Tau3/GDPval-AA and sub-frontier AutomationBench absolute score.
- **Reasoning: 82/100.** High GPQA Diamond (94%) and solid AA Index (48) support strong mid-to-frontier; HLE ~48% and lower HLE-Diamond no-tools score prevent higher.
- **Context window: 95/100.** Verified 1.05M total maps to top tier (≥1M = 95-100); no public high-retrieval (MRCR/RULER ≥98% at 512k+) evidence for full 100.
- **Multimodal: 65/100.** Text + image input, text output only (no video/PDF/audio in or non-text out).
- **Coding: 82/100.** Strong DeepSWE (68.8%), Vibe Code Bench (~88%), and Terminal-Bench 2.1 support high mid/frontier coding; lack of verified SWE-bench Verified / LiveCodeBench caps it.
- **Cost efficiency: 88/100.** $2/$10 maps near the ~$1.25/$4.25 reference band (~88); good cache discount helps agentic workloads.
- **Overall Score: 80.4/100.** Mean of the five non-cost dimensions (half-up). Best-fit for cost-efficient complex coding and agentic professional workflows below flagship Astra.

---

## Signature

- Provided by: **Grok 4.5 (xAI)** — 2026-10-10
- Method: Fresh public internet research (OpenAI official model card/docs/announcement, Epoch AI, Artificial Analysis, Vals AI, and secondary aggregators); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
