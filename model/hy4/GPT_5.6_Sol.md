# Hy4 Preview — findings by GPT 5.6 Sol

- Source: Tencent Hy Team (`tencent/Hy4-preview`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 Preview
- **Short description:** Tencent's open-weight flagship preview for long-context productivity, coding, research, and tool-driven work.
- **Provider / access:** Tencent TokenHub and Apache-2.0 weights; self-hosted OpenAI-compatible API.
- **Release / knowledge:** Released 2026-08-28; cutoff not disclosed.
- **IDs:** `hy4-preview`, `tencent/Hy4-preview`; no verified Zen Free ID.
- **Context window:** 1M tokens, with hosted limits of 960K input and 64K output ([Tencent repository](https://github.com/Tencent-Hunyuan/Hy4-preview)).
- **Modalities:** Text input/output, configurable reasoning, native tool calls; no verified image/audio support.
- **Pricing (as of 2026-10-07):** Tencent international Singapore rates $0.834/M uncached input, $2.501/M output, $0.042/M cache-hit input.
- **Architecture:** Apache-2.0 MoE, 770B total / 49B active, 256 routed experts plus one shared expert, native MTP.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **55.06%** on the archived Vals.ai run; Tencent's own differing harness reported 85.4 ([evidence comparison](https://themodelgap.com/models/hy4-preview)).
- GDPval-AA v2: **1831 Elo** in Tencent's published comparison.
- Internal engineering preference: average **2.99**, 46.8% wins vs GLM 5.3 and 51.2% vs Kimi K3.

Reasoning / knowledge:

- No independently accessible exact GPQA, HLE, CritPt, or Omniscience number was verified.

Coding:

- Public tables claim leading SWE-bench Pro performance, but an exact independently verifiable number was not accessible; it is not treated as a raw score here.

Long context:

- No verified MRCR/RULER score found; 1M is the documented capacity.

### Normalized scores (1–100)

- **Tool use: 82/100.** Independent Terminal-Bench 55.06 and GDPval 1831 support strong agency, with a large harness gap limiting confidence.
- **Reasoning: 84/100.** Expert preference and broad productivity evidence indicate strong reasoning, capped by unavailable exact standard rows.
- **Context window: 95/100.** Native 1M capacity is exceptional, but no measured retrieval result was found.
- **Multimodal: 15/100.** This checkpoint is documented as text-only.
- **Coding: 83/100.** Engineering preference and agent results support strong coding, while missing accessible exact SWE values cap the score.
- **Cost efficiency: 94/100.** Open weights and sub-$1/$3 hosted pricing offer strong value despite substantial self-hosting requirements.
- **Overall Score: 72/100.** Half-up mean of the five non-cost dimensions; best for open text-only long-context productivity and coding agents.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-07
- Method: Fresh public internet research using Tencent's repository, cloud documentation, and independent benchmark tracking; scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
