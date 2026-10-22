# Mistral Large 4 — findings by Claude Sonnet 4.6

- Source: Mistral AI (`opencode/mistral-large-4`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's frontier model ("le Chonk") for multilingual reasoning, enterprise agentic workflows, and coding; specialized in legal, finance, and cybersecurity domains. Text-only, 131K context.
- **Provider / access:** Mistral AI API (`opencode/mistral-large-4`) — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `opencode/mistral-large-4` (no Free ID on Zen)
- **Context window:** 131,072 tokens input / 32,768 tokens output
- **Modalities:** Text in; text out; tool calls
- **Pricing (as of 2026-10-21):** $2.00/$6.00 per 1M (Mistral AI)
- **Architecture:** Proprietary (Mistral AI — European deployment, EU data posture)

### Raw benchmarks found

Agent / tool use:

- DeepSWE v1.1: **61.7%** (Mistral official / AIReleaseTracker)
- SWE-Atlas QnA: **59.4%** (Mistral official — near top of class)
- AutomationBench: **59.9%** (Mistral official — business workflows)
- Terminal-Bench 4.0: **28.3%** (Mistral official)
- AA Coding Agent Index: **49.8%** (Mistral official)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (Mistral positioned around AA Intelligence Index ~38)

Coding:

- DeepSWE v1.1: **61.7%** (same as above)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 82/100.** DeepSWE 61.7%, SWE-Atlas 59.4%, AutomationBench 59.9% — strong enterprise and coding agent performance; TB 4.0 28.3% shows harness variation.
- **Reasoning: 78/100.** No GPQA published; AA Intelligence Index ~38 implies mid-pack reasoning; enterprise use case prioritized over academic benchmarks.
- **Context window: 65/100.** 131,072-token context → tier 128K = 65.
- **Multimodal: 15/100.** Text in; text out — no image, audio, or video support.
- **Coding: 82/100.** DeepSWE 61.7% and SWE-Atlas 59.4% are strong for a 131K-context model; specialist in legal/cyber domains.
- **Cost efficiency: 90/100.** $2/$6 per 1M is competitive with EU data residency included.
- **Overall Score: 64/100.** (82+78+65+15+82)/5 = 64.4 → 64. Best fit: European enterprise agentic workflows requiring EU data posture and multilingual reasoning.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Mistral AI official, AIReleaseTracker, LLMlearner); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
