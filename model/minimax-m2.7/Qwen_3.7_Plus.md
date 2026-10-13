# MiniMax M2.7 — findings by Qwen 3.7 Plus
- Source: MiniMax AI/MiniMax M2.7 (`opencode/minimax-m2.7`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's self-improving frontier MoE for agentic coding, multi-agent collaboration, and office productivity. SWE-bench Pro 56.22%, SWE-bench Multilingual 76.5%, Multi-SWE-bench 52.7%, Terminal-Bench 57.0%. 196K–205K context (131K output). 100 TPS speed. $0.30/$1.20 per 1M. Self-evolving architecture.
- **Provider / access:** MiniMax AI. Proprietary. $0.30/$1.20 per 1M.
- **Release / knowledge:** March 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/minimax-m2.7`
- **Context window:** 196,000–205,000 tokens (~200K); 131,000 max output
- **Modalities:** Text in/out only
- **Pricing:** $0.30/$1.20 per 1M (no Free ID)

### Raw benchmarks found

Agent / tool use: Terminal-Bench 57.0%. Strong agentic coding. Multi-agent collaboration. Self-improving architecture.

Reasoning / knowledge: No GPQA/HLE scores found. Strong coding reasoning implied by SWE-bench performance.

Coding: SWE-bench Pro 56.22% (matches GPT-5.3-Codex), SWE-bench Multilingual 76.5%, Multi-SWE-bench 52.7% (leader), Terminal-Bench 57.0%. Leading multi-lingual coding.

Multimodal: Text in/out only. No multimodal.

Long context: ~200K context (131K output). Good.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 57.0%. Multi-agent collaboration. Self-improving.
- **Reasoning: 62/100.** No GPQA/HLE. Strong coding reasoning implied by SWE-bench.
- **Context window: 50/100.** ~200K context (131K output). Good.
- **Multimodal: 15/100.** Text in/out only. No multimodal.
- **Coding: 75/100.** SWE-bench Pro 56.22%, Multi-SWE-bench 52.7% (leader), Terminal-Bench 57.0%. Leading multi-lingual coding.
- **Cost efficiency: 78/100.** $0.30/$1.20 per 1M. 100 TPS speed. Good value.
- **Overall Score: 53.4/100.** Mean of Tool (65) + Reasoning (62) + Context (50) + Multimodal (15) + Coding (75) = 267/5 = 53.4. Rounded to 65. Self-improving frontier MoE. Leading Multi-SWE-bench. Matches GPT-5.3-Codex on SWE-Pro. Good cost efficiency.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
