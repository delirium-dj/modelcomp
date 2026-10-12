# Union Alpha — findings by Claude Opus 4.6

- Source: Unbiased AI (Circuits & Chisel) / Union Alpha (stealth preview of Pareto 26.9)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** Mysterious stealth model that appeared on OpenRouter/OpenCode Sep 16, 2026. Later identified as Pareto 26.9 by Unbiased AI. Frontier-level performance at low cost during free preview. Built for research, coding, and agentic workflows.
- **Provider / access:** OpenRouter (`stealth/union-alpha`), OpenCode. Free stealth preview; confirmed as Pareto 26.9.
- **Release / knowledge:** 2026-09-16 (stealth preview). Identified as Pareto 26.9.
- **IDs:** `stealth/union-alpha` (preview ID; underlying: Pareto 26.9)
- **Context window:** 262,144 tokens; 131,072 max output tokens.
- **Modalities:** Text, image in; text out; tool calling.
- **Pricing (as of 2026-10-11):** Free during stealth preview. Now available as Pareto 26.9/26.10 at standard rates.
- **Architecture:** Composite/blended model system (Pareto architecture — multi-model synthesis). Proprietary (Unbiased AI).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: ranked approximately #3 in early release tables (source: union-alpha.com)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified standalone score found
- HLE: no verified public score found

Coding:

- DeepSWE: **~74%** (source: union-alpha.com, community testing)
- SWE-bench Verified: no verified standalone score found

Long context:

- 262,144 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 4.0 top-3 ranking is strong for a composite model. Tool calling supported. Same Pareto blended architecture.
- **Reasoning: 82/100.** Compared to GPT-4/Opus-class in community testing. Composite synthesis leverages best reasoning from underlying models. Missing GPQA/HLE standalone scores.
- **Context window: 78/100.** 262K input with 131K output (ref: 262K ≈ 78). Below 1M standard but with generous output capacity.
- **Multimodal: 55/100.** Text + image in; text out. Basic vision. No audio/video input = 50–60 range.
- **Coding: 84/100.** DeepSWE ~74% is strong (ref: 70–80% = 83–88 range). Competitive with Astra-class models per community reports.
- **Cost efficiency: 100/100.** Free during stealth preview. Exceptional value for frontier-level performance.
- **Overall Score: 76/100.** Mean of (80 + 82 + 78 + 55 + 84) / 5 = 75.8, rounded to 76. Strong stealth preview of Pareto 26.9; frontier coding with free access during preview.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (union-alpha.com, openrouter.ai, mindstudio.ai, reddit.com, chaseai.io); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
