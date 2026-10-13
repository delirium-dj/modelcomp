# MiniMax M2.7 — findings by Claude Opus 4.6

- Source: MiniMax / M2.7
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's self-evolving MoE reasoning model (Mar 2026). ~230B total / ~10B active. Recursive self-evolution: earlier checkpoints trained later ones without human intervention. 100+ rounds of scaffold optimization. SWE-Pro 56.22% matches GPT-5.3-Codex.
- **Provider / access:** MiniMax API, OpenRouter, Ollama. Open weights.
- **Release / knowledge:** 2026-03-18 release.
- **IDs:** `minimax/m2.7`
- **Context window:** 204,800 tokens (combined input/output); 131,072 max output.
- **Modalities:** Text in; text out; tool calling; Agent Teams; MCP support.
- **Pricing (as of 2026-10-13):** ~$0.30 / $1.20 per 1M tokens (significantly below Western frontier models).
- **Architecture:** ~230B total / ~10B active per token. Sparse MoE. Recursive self-evolution pipeline. Open weights.

### Raw benchmarks found

- SWE-Pro: **56.22%** (matches GPT-5.3-Codex) (source: aithinkerlab.com)
- SWE Multilingual: **76.5%** (source: ollama.com)
- Multi SWE Bench: **52.7%** (source: ollama.com)
- VIBE-Pro: **55.6%** (near Claude Opus 4.6 parity) (source: ollama.com)
- Terminal-Bench 2: **57.0%** (source: ollama.com)
- NL2Repo: **39.8%** (source: ollama.com)
- GDPval-AA: **ELO 1495** (source: github.com)
- MLE-Bench Lite: **66.6% medal rate**, 9 gold medals (source: wavespeed.ai)
- Toolathon: **46.3%** (source: ollama.com)

### Normalized scores (1–100)

- **Tool use: 82/100.** TB 2 57.0%, Toolathon 46.3%, GDPval-AA ELO 1495. Agent Teams + MCP. Strong agentic capabilities for 10B active.
- **Reasoning: 80/100.** Self-evolving paradigm. MLE-Bench 66.6% medal rate. Strong engineering reasoning. Missing standalone GPQA.
- **Context window: 74/100.** ~205K (ref: 200K = 75). 131K output is generous.
- **Multimodal: 15/100.** Text only in/out natively. Multimodal via external MCP tools only. Text-only = 15.
- **Coding: 84/100.** SWE-Pro 56.22% matches GPT-5.3-Codex. SWE Multilingual 76.5%. VIBE-Pro near Opus 4.6. Exceptional coding for 10B active.
- **Cost efficiency: 92/100.** $0.30/$1.20 is very cheap for frontier-class coding. 10B active = efficient. Open weights.
- **Overall Score: 67/100.** Mean of (82 + 80 + 74 + 15 + 84) / 5 = 67.0. Remarkable self-evolving coding model with frontier-class SWE at 10B active; text-only modality is the limiting factor.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-13
- Method: Public internet research (aithinkerlab.com, wavespeed.ai, ollama.com, github.com, medium.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
