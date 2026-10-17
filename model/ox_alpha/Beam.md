# Ox Alpha — findings by Beam

- Source: OpenRouter stealth/ox-alpha (identified as GLM-5.3-Flash), `stealth/ox-alpha`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (stealth/ox-alpha)
- **Short description:** OpenRouter stealth model (Aug 20, 2026) later identified as GLM-5.3-Flash (Z.AI). Free, 1M context, multimodal (text/image/video), reasoning-capable. Topped OpenRouter call volume for 6 days.
- **Provider / access:** OpenRouter `stealth/ox-alpha`; OpenCode Zen. Free during preview.
- **Release / knowledge:** Appeared 2026-08-20; officially identified as GLM-5.3-Flash on 2026-08-26. Knowledge cutoff November 2025 (per SMF).
- **IDs:** `stealth/ox-alpha`
- **Context window:** 1,048,576 tokens; max output 131,072.
- **Modalities:** text, image, video in; text out; reasoning yes (mandatory, default max); tool calling yes; JSON object (no schema enforce).
- **Pricing (as of 2026-10-17):** Free ($0/$0) during preview; preview terms.
- **Architecture:** Same as GLM-5.3-Flash (320B total / 18B active, MoE, hybrid attention, MIT).

### Raw benchmarks found

- Community benchmark (SMF Official A, strict_v01, 157 tests, thinking off): **127/157 (80.9%)**
  - tool_calling: 2/2 (100%)
  - writing: 5/5 (100%)
  - reasoning: 27/30 (90.0%)
  - prose: 27/30 (90.0%)
  - instruction: 26/30 (86.7%)
  - coding: 20/30 (66.7%)
  - math: 20/30 (66.7%)
- No official vendor benchmarks for stealth slug; inherits GLM-5.3-Flash numbers (Terminal-Bench 2.1 84.3%, DeepSWE 63.4%, etc.).
- Independent comparison: outperforms GPT-5.6 Sol and Fable 5 on coding/agent tasks (Winzheng).

### Normalized scores (1–100)

- **Tool use: 78/100.** Inherited from GLM 5.3 Flash (agentic 57.2, Terminal-Bench 2.1 84.3%, Toolathlon 78.4%).
- **Reasoning: 72/100.** Inherited from GLM 5.3 Flash (HLE w/tools 55.3%).
- **Context window: 80/100.** 1M window (inherited).
- **Multimodal: 82/100.** Inherited from GLM 5.3 Flash (CharXiv 89.4%, Chartography 78.0%).
- **Coding: 76/100.** Inherited from GLM 5.3 Flash (DeepSWE 63.4%, NL2Repo 56.3%).
- **Cost efficiency: 100/100.** Free during preview.
- **Overall Score: 78/100.** Inherited from GLM 5.3 Flash (BenchLM 57.36); same weights.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (SMF Clearinghouse, Winzheng, GIGAZINE, oxalpha.wiki); scores are normalized 1–100 interpretations, not official vendor scores. Ox Alpha is the stealth slug for GLM-5.3-Flash; benchmarks inherited.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.