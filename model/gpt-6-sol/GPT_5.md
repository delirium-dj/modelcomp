**# GPT-6 Sol — findings by ChatGPT 5 (openai/gpt-5)**

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-6 Sol (no free-tier wording on API; available in ChatGPT Work/Codex for paid tiers)
- **Short description:** Mid-tier model in OpenAI’s GPT-6 family, positioned for complex coding and agentic workflows at lower cost than the flagship GPT-6 Astra. Builds on Astra’s advances with improved efficiency and alignment.
- **Provider / access:** OpenAI API (`gpt-6-sol`); Responses API for built-in tools/function calling; also in ChatGPT Work and Codex (Plus/Pro/Business/Enterprise/Edu). Chat Completions supports function calling only with reasoning_effort=none.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff April 20, 2026.
- **IDs:** `openai/gpt-6-sol` (no Free ID on Zen reported)
- **Context window:** 1,050,000 tokens total (verified via OpenAI docs; up to ~922k input / 128k output).
- **Modalities:** Text + image in; text out; reasoning (yes, with adjustable effort: none/low/medium/high/xhigh/max); tool calls (yes, including web search, code interpreter, computer use, etc.); JSON mode (structured outputs supported).
- **Pricing (as of 2026-10-03):** $2.00 input / $10.00 output per 1M tokens (standard); cached input $0.20; cache writes $2.50. Long-context rates higher ($4/$15). Paid only; free-tier privacy caveat N/A.
- **Architecture:** Proprietary closed-weights (no params or MoE details published).

### Raw benchmarks found
**Agent / tool use:**
- Terminal-Bench 2.1: **83.15%** (Vals AI, #6 of 73).
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

**Reasoning / knowledge:**
- GPQA Diamond: **96%** (Epoch AI).
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **48** (max effort; AA v4.3).
- Omniscience Accuracy / Hallucination Rate: no verified public score found (one source notes ~60% hallucination rate at max, but not standardized).

**Coding:**
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: **87.82%** (Vals AI, #6 of 103).
- DeepSWE / Coding Index / other: **68.8%** (DeepSWE v1.1, max effort; OpenAI).

**Long context:**
- No long-context retrieval reported (MRCR / RULER / GraphWalks at window length)

### Normalized scores (1-100)
- **Tool use: 85/100.** Strong Terminal-Bench 2.1 at 83.15% caps at high frontier-mid tier per mapping (TB2.1 45-60% mid / 88%+ frontier).
- **Reasoning: 95/100.** GPQA Diamond 96% places in frontier range (90%+ = 90-100); AA Index 48 supports solid but not top-tier knowledge.
- **Context window: 90/100.** 1.05M total falls in 500K-1M tier (85-94); no retrieval % at 512K+ reported to reach 100.
- **Multimodal: 65/100.** Text + image in (60-70 range); text-only out.
- **Coding: 85/100.** DeepSWE 68.8% + Vibe Code Bench 87.82% support high-mid frontier (DeepSWE frontier ~74%+); lacks SWE-bench Verified for full confirmation.
- **Cost efficiency: 88/100.** ~$2/$10 tier maps to ~88 per formula.
- **Overall Score: 84.0/100.** Mean of five non-cost dims (85+95+90+65+85)/5 = 84.0 (half-up rounded). Best-fit recommendation: Strong balanced agentic/coding model for cost-sensitive professional workflows; prefer over cheaper Luna for complex tasks, below Astra for peak frontier needs.

---
## Signature
- Provided by: **ChatGPT 5 (openai/gpt-5)** — 2026-10-03
- Method: Public internet research via web search on official OpenAI announcements, Artificial Analysis, Vals AI, Epoch AI, and model documentation pages; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.