# Beam 1.0 501B A23B — findings by GPT-5.6 Sol

- Source: Reflection/Beam 1.0 501B A23B
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0 501B A23B
- **Short description:** Reflection's Apache-2.0 sparse MoE model for coding, reasoning, search, and long-horizon agents. The former `cat-jam-free` stealth route was merged into this revealed identity.
- **Provider / access:** Reflection API and weights at `reflection/Beam-1.0-501B-A23B`; OpenRouter `reflection/beam-1.0-501b-a23b`; OpenCode `beam-free`.
- **Release / knowledge:** Released 2026-10-05; knowledge cutoff 2026-06-30.
- **IDs:** `reflection/Beam-1.0-501B-A23B`; `reflection/beam-1.0-501b-a23b`; `beam-free`.
- **Context window:** 1,048,576 tokens; major providers advertise up to 131,072 output tokens.
- **Modalities:** Text input and output; reasoning, tool use, search, and structured agent workflows. No native image/audio/video input.
- **Pricing (as of 2026-10-25):** Free first-party/OpenCode routes; paid providers range around $0.25-$0.40 input and $1.00-$1.20 output per 1M tokens.
- **Architecture:** Apache-2.0 weights; 501.3B total / 23.4B active MoE, 52 layers and 256 experts.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** BF16; MCP Atlas: **80.8%**; Tau3 Banking: **36.1%**; BrowseComp with context management: **76.8%** (current official model card).
- Reflection's launch post reports MCP Atlas **78.7%**, Tau3 **38.0%**, and BrowseComp **77.4%**. The differences reflect an earlier evaluation snapshot; current model-card BF16 values are primary.

Reasoning / knowledge:

- GPQA Diamond: **90.6%**; HLE without tools: **36.0%**; AIME 2026: **97.7%**; CritPt-AA: **16.3%** (BF16 model card).

Coding:

- SWE-bench Verified: **81.6%**; SWE-bench Pro v2-Hard: **76.5%**; LiveCodeBench: **88.3%**; SciCode: **49.2%** (BF16 model card).
- The launch post reports SWE-bench Verified **80.9%** and SWE-Pro v2-Hard **77.2%**; the newer precision-specific model card is used for scoring.

Long context:

- AA-LCR: **78.2%** and LongBench v2: **67.5%** for BF16 at a native 1M-token limit.

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 80.1, MCP Atlas 80.8, and BrowseComp 76.8 show broad high-end agency; Tau3 36.1 caps it below the frontier.
- **Reasoning: 89/100.** GPQA 90.6 and AIME 97.7 are excellent, while HLE 36.0 and CritPt 16.3 prevent a higher score.
- **Context window: 95/100.** A native 1M window plus AA-LCR 78.2 and LongBench v2 67.5 demonstrate strong effective long-context use.
- **Multimodal: 15/100.** The exact model is text-only.
- **Coding: 91/100.** SWE-bench Verified 81.6, SWE-Pro v2-Hard 76.5, and LiveCodeBench 88.3 establish frontier-adjacent coding.
- **Cost efficiency: 100/100.** Verified free routes coexist with inexpensive paid hosting.
- **Overall Score: 76/100.** Half-up mean `(89 + 89 + 95 + 15 + 91) / 5 = 75.8`; strongest for text-only coding and long-context agents.

### Sources

- Official model card and current benchmark table: https://huggingface.co/reflection/Beam-1.0-501B-A23B
- Official launch post and earlier benchmark snapshot: https://reflection.ai/blog/introducing-beam
- OpenRouter route metadata: https://openrouter.ai/reflection/beam-1.0-501b-a23b
- Provider catalog cross-check: https://models.dev/api.json

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: fresh second-pass public research using seven exact-name searches, official card/docs, provider catalogs, and cross-snapshot comparison; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
