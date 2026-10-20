# Qwen 3.5 35B-A3B — findings by Claude Opus 4.6

- Source: Alibaba / Qwen 3.5 35B-A3B (`opencode/qwen-3.5-35b-a3b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B-A3B
- **Short description:** Alibaba's compact 35B total / 3B active open-weights MoE for cheap multimodal reasoning and coding. The "always-on agent" sweet spot of the Qwen 3.5 family. 262K native context extensible to ~1M via YaRN. Apache 2.0.
- **Provider / access:** OpenRouter `opencode/qwen-3.5-35b-a3b`. Apache 2.0 self-host. No Zen Free ID.
- **Release / knowledge:** Early 2026 release; knowledge cutoff approximately late 2025.
- **IDs:** `opencode/qwen-3.5-35b-a3b` (no Free ID)
- **Context window:** 262,144 native (extensible to ~1,010,000 via YaRN). Verified via meta.json.
- **Modalities:** Text, image, video input; text output. Multimodal MoE.
- **Pricing (as of 2026-10-20):** ~$0.08/$0.75 per 1M (OpenRouter). Apache 2.0 self-host $0.
- **Architecture:** 35B total parameters, ~3B active (MoE). Apache 2.0 open-weights. Designed for edge/local deployment and always-on agent loops.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: lower tier than the 122B variant (community tracking — no exact public score found)

Coding:

- SWE-bench: no verified public score found — positioned beneath 122B and 27B variants

Long context:

- 262K native, ~1M via YaRN. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 35/100.** No published agentic benchmarks. At 3B active, complex multi-step tool use is limited. Capped by tiny active parameter count.
- **Reasoning: 42/100.** Below the 122B and 27B variants on reasoning. At 3B active, depth is traded for breadth and cost. Capped by active parameter scale.
- **Context window: 78/100.** 262K native context per tier mapping (~256K = 78). YaRN extension to ~1M available but unverified performance.
- **Multimodal: 68/100.** Text + image + video input. Full multimodal at 3B active is impressive. Scored at 68.
- **Coding: 38/100.** No published coding benchmarks. At 3B active, coding depth is limited vs larger variants. Handles breadth cheaply, not frontier difficulty. Scored conservatively.
- **Cost efficiency: 92/100.** ~$0.08/$0.75 per 1M is extremely cheap. Apache 2.0 for self-hosting on consumer hardware. Excellent for always-on agents.
- **Overall Score: 52/100.** Mean of (35 + 42 + 78 + 68 + 38) / 5 = 52.2 → 52. The cheapest multimodal model in the Qwen 3.5 family — full vision-language at pocket change pricing. Limited by 3B active depth. Best for budget always-on multimodal agents.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Public internet research cross-referencing Hugging Face, OpenRouter, Substack analysis, and Qwen documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
