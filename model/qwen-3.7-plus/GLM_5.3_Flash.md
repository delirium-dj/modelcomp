# Qwen 3.7 Plus — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`qwen3.7-plus`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus (Qwen3.7-Plus)
- **Short description:** Alibaba Cloud Qwen Team's cost-effective multimodal agent model that unifies vision and language into a single agent foundation — a multimodal interactive hybrid agent with GUI plus CLI agent control for coding and productivity workflows, built on the Qwen3.7 text backbone. Superseded within the family by Qwen 3.8 in August 2026.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope international (`dashscope-intl.aliyuncs.com/compatible-mode/v1`, OpenAI-compatible Chat Completions); chat.qwen.ai playground; hosted via Together ($0.32/$1.28) and Fireworks ($0.40/$1.60). No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-05-31; knowledge cutoff not verified.
- **IDs:** `qwen3.7-plus` (Alibaba Model Studio / OpenRouter / Together / Fireworks). No Free ID on Zen.
- **Context window:** 1,000,000 tokens (Together: 1M in / 65.5K out; Fireworks: 262K in / 65.5K out — verified via llm-stats provider table).
- **Modalities:** text and image input; text output; reasoning yes (hybrid interactive agent); tool calls with hybrid GUI + CLI agent control; JSON mode.
- **Pricing (as of 2026-09-24):** $0.32 / $1.28 per 1M in/out via Together; $0.40 / $1.60 via Fireworks (cached input $0.08). Proprietary; paid only — no free API tier.
- **Architecture:** Proprietary (built on the Qwen3.7 text backbone with a vision-language unified agent foundation) — parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- CoWorkBench: **65.1** (vendor comparison table, cited by DataCamp's Qwen3.8-Flash-Next analysis; vs Qwen3.8-Flash's 73.9 and Opus 4.6 Max's 68.2)
- JobBench: **27.6** (same table; vs Qwen3.8-Flash's 55.7)
- Terminal-Bench, Tau3, GDPval-AA, MCPAtlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.3** (DataCamp comparison table — Qwen3.7-Plus column)
- HLE: **34.7** (same table; vs Qwen3.8-Flash's 35.9)
- LiveCodeBench v6: **89.6** (same table)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Pro: **55.8** (DataCamp comparison table)
- SWE-bench Multilingual: **75.8** (same table)
- DeepSWE 1.1: **16.5** (same table; vs Qwen3.8-Flash's 58.7)
- LiveCodeBench v6: **89.6** (as above)
- SWE-bench Verified: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval value verified (1M window claimed; no MRCR/RULER value found)

### Normalized scores (1–100)

- **Tool use: 65/100.** CoWorkBench 65.1 is mid-band and JobBench 27.6 is low; the hybrid GUI + CLI agent control is a design strength but no Terminal-Bench/Tau3/GDPval numbers were found.
- **Reasoning: 82/100.** GPQA Diamond 90.3% hits the 90%+ frontier reference and LiveCodeBench 89.6% is strong, but HLE 34.7% stays under the 40% bar and no independent index run exists — those gaps cap it.
- **Context window: 95/100.** 1M tokens maps to the ≥1M tier (95–100); no measured ≥98% retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 65/100.** Text + image input, text output, no audio/video input — per methodology the image-in band is 60–70.
- **Coding: 80/100.** SWE-bench Pro 55.8%, SWE Multilingual 75.8% and LiveCodeBench 89.6% are solid, but DeepSWE 16.5% trails the family's Flash tier badly and no SWE-bench Verified number was found.
- **Cost efficiency: 95/100.** $0.32/$1.28 per 1M (Together) sits between the ~$0.10/$0.20 = 97–99 and ~$0.60/$2.20 = ~92 methodology references, landed at 95.
- **Overall Score: 77/100.** Mean of the five quality dims (65 + 82 + 95 + 65 + 80) / 5 = 77.4 → 77. Best-fit: a cheap multimodal agent foundation for vision-plus-language productivity workflows — superseded by Qwen 3.8 models at similar cost with much stronger agentic coding.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (llm-stats model page, DataCamp comparison tables, OpenRouter, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.md`, using the same headings.
