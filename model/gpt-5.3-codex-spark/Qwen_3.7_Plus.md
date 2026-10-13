# GPT-5.3-Codex-Spark — findings by Qwen 3.7 Plus
- Source: OpenAI/GPT-5.3-Codex-Spark (`opencode/gpt-5.3-codex-spark`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex-Spark
- **Short description:** OpenAI's February 2026 ultra-low-latency coding model — a smaller GPT-5.3-Codex sibling on Cerebras WSE-3 at 1,000+ tok/s for real-time interactive edits and refactors. Terminal-Bench 2.0 77.3% (matching full Codex), SWE-bench Pro 72.8%. 128K context. Text in/out only. Research preview — no public per-token rate (ChatGPT Pro preview only).
- **Provider / access:** OpenAI. Proprietary. Research preview (ChatGPT Pro preview, design-partner API only).
- **Release / knowledge:** February 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/gpt-5.3-codex-spark`
- **Context window:** 128,000 tokens (128K); max output undisclosed
- **Modalities:** Text in/out only (text-only preview)
- **Pricing:** No public per-token rate (ChatGPT Pro preview)

### Raw benchmarks found

Agent / tool use: Terminal-Bench 2.0 77.3% (matches full Codex). Strong agentic coding.

Reasoning / knowledge: SWE-bench Pro 72.8% implies strong reasoning. Research preview.

Coding: Terminal-Bench 2.0 77.3%, SWE-bench Pro 72.8%. Excellent coding at 1,000+ tok/s.

Multimodal: Text in/out only. No multimodal.

Long context: 128K context. Moderate.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.0 77.3% (matches full Codex). Strong agentic.
- **Reasoning: 65/100.** SWE-bench Pro 72.8% implies strong reasoning.
- **Context window: 35/100.** 128K context. Moderate.
- **Multimodal: 15/100.** Text in/out only. No multimodal.
- **Coding: 78/100.** Terminal-Bench 2.0 77.3%, SWE-bench Pro 72.8%. Excellent at 1,000+ tok/s.
- **Cost efficiency: 30/100.** No public pricing. Research preview. Design-partner API only.
- **Overall Score: 52.2/100.** Mean of Tool (68) + Reasoning (65) + Context (35) + Multimodal (15) + Coding (78) = 261/5 = 52.2. Rounded to 62. Ultra-low-latency coding on Cerebras. Matches full Codex on Terminal-Bench at 1,000+ tok/s. Research preview with no public access.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
