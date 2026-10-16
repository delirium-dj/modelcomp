# GLM-5.3-FlashX — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchable.ai/models/z-ai/glm-5.3-flashx-20260918, zenmux.ai/z-ai/glm-5.3-flashx, aibenchy.com, blog.buildfastwithai.com, z.ai/blog/glm-5.3-flash (parent family), llm-stats.com/models/glm-5.3-flash (parent specs)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Z.AI's GLM-5.3-FlashX high-speed serving tier (released Sept 2026) — a faster serving variant of GLM-5.3-Flash for efficient coding and long-horizon agent tasks; 320B total / 18B active MoE (parent family specs), 1M-token context, text+image in → text out (native multimodal per ZenMux), hybrid sparse + linear attention, MIT license.
- **Provider / access:** Z.AI API (`glm-5.3-flashx`), ZenMux AI Model Routing (`z-ai/glm-5.3-flashx`), OpenRouter. Parent GLM-5.3-Flash weights on Hugging Face (`zai-org/GLM-5.3-Flash`).
- **Release / knowledge:** Released 2026-09 (ZenMux listing 2026-09-18); knowledge cutoff not stated.
- **IDs:** `glm-5.3-flashx` (Z.AI API / ZenMux / OpenRouter). No Free ID confirmed (MIT open weights → self-host effectively $0).
- **Context window:** 1M tokens (inherited from GLM-5.3-Flash family per z.ai docs / llm-stats). Verified via parent family docs.
- **Modalities:** Text and image in; text out; native multimodal (ZenMux); reasoning yes (long-horizon agent tasks); tool use yes (agent tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** AI BENCHY reports $0.114 total cost; parent GLM-5.3-Flash listed at $0.150/M input, $0.030/M cached, $0.500/M output (llm-stats). FlashX-specific per-token pricing not confirmed in fetched sources.
- **Architecture:** Open-weights MoE, 320B total / 18B active (parent family), hybrid sparse + linear attention (mHC), MIT license; ~200 tokens/s serving speed (ZenMux).

### Raw benchmarks found

Only sparse benchmark data found for this specific FlashX serving tier:

- AI BENCHY: score 7.1, rank #161, 10.0 reliability, 69.6% pass rate, $0.114 total cost, 7.37s average response time (aibenchy.com)
- ZenMux: ~200 tokens/s inference speed, native multimodal, long-horizon agent tasks

Parent family GLM-5.3-Flash benchmarks (for reference, not FlashX-specific):
- Toolathlon-Verified 78.4%, OSWorld-Verified 82.0%, Terminal-Bench 2.1 87.6%, DeepSWE 71.9%, GPQA 90.9% (from glm-5.3-flash report)

No verified public scores found for FlashX-specific: GPQA, HLE, SWE-bench, LiveCodeBench, MMMU-Pro, MRCR, OSWorld, Terminal-Bench, CritPt.

### Normalized scores (1–100)

Derived from the specs above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin — dims rest on parent family specs + one AI BENCHY score; treat all scores as highly provisional.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** Positioned for efficient coding and long-horizon agent tasks (ZenMux); no verified Terminal-Bench/OSWorld/Toolathlon scores for this exact serving tier; capped by thin independent benchmark evidence.
- **Reasoning: 65/100.** GLM-5.3 family reasoning lineage (18B active MoE); no verified GPQA/HLE/ARC-AGI/CritPt scores for this exact tier; capped by zero public reasoning numbers.
- **Context window: 90/100.** Inherited 1M tokens from GLM-5.3-Flash family (z.ai docs / llm-stats); capped because no public full-depth needle-recall score at 1M was found for this tier.
- **Multimodal: 70/100.** Text + image in, text out (ZenMux); capped by absence of public MMMU-Pro/Chartography/LVBench scores and text-only output.
- **Coding: 65/100.** Positioned for efficient coding (ZenMux); no verified SWE-bench/LiveCodeBench/DeepSWE scores for this exact tier; capped by zero public coding numbers.
- **Cost efficiency: 90/100.** MIT open weights (self-host ~$0) plus very cheap reported cost ($0.114/task per AI BENCHY); not counted toward Overall.
- **Overall Score: 71/100.** Half-up mean of (65 + 65 + 90 + 70 + 65) / 5 = 71.0 → 71. Best-fit recommendation: high-speed open-weights serving tier of GLM-5.3-Flash for coding/agent tasks; verify on your own benchmarks given extremely thin public score coverage (single AI BENCHY row).

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (ZenMux + buildfastwithai + aibenchy + z.ai parent family docs + llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
