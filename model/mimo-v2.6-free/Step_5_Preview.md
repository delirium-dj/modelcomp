# MiMo V2.6 Free — findings by Step 5 Preview

- Source: Xiaomi (`opencode/mimo-v2-6-free`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free. **Not a separate model** — it is Xiaomi's MiMo-V2.6-Flash weights served on OpenCode Zen's **$0 free tier**. The repo's meta.json records it as Xiaomi's **MIT 309B/15B-active Flash MoE**, the same weights as `model/mimo-v2.6-flash/` (refreshed earlier in this session). This is the third shared-weights access tier in this corpus after GLM-5.3-FlashX and Muse Spark 1.3's Contributor/Max split.
- **Short description:** A genuinely striking value proposition — **SWE-bench Verified 92.0% behind a $0 meter** (per the repo's meta.json, Xiaomi's own figure) — with the free lane's constraints being the whole story: the Zen route caps context at **200K/32K** against the weights' native 1M/128K. A frontier-grade coding model that is only available in a window small enough to constrain much of what it would otherwise do.
- **Provider / access:** **OpenCode Zen free tier ($0 in/out)**, plus a paid fallback at **$0.14/$0.28 per 1M** (which is the MiMo-V2.6-Flash card). Zen's own docs note that during a free period "the team is using this time to collect feedback and improve the model" — so **free-tier traffic may be used for training, and it is not zero-retention**. Weights also on Hugging Face under MIT (per the meta.json's licence note).
- **Release / knowledge:** release date not restated; the V2.6 generation is Xiaomi's 2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `opencode/mimo-v2-6-free` (Zen free); `xiaomi/mimo-v2.6-flash` (paid fallback); `XiaomiMiMo/MiMo-V2.6-Flash-RL` (Hugging Face).
- **Context window:** **200,000 tokens total with 32,768 max output on the Zen free lane**, against **1,048,576 (1M) with 128K output natively** (repo meta.json). The free lane therefore sees one-fifth of the model's window.
- **Modalities:** **text, image, video and audio in; text out** (repo meta.json) — full omni-modal input, which is notable for a free-tier route.
- **Pricing (as of 2026-11-05):** **$0 in/out on the Zen free lane**, $0.14/$0.28 paid fallback. Methodology places $0 at 100, subject to the time-limited and training-data caveats.
- **Architecture:** **sparse MoE, 309B total / 15B active**, MIT-licensed weights (per the repo's meta.json).

### Raw benchmarks found

**No BenchLM or Artificial Analysis page exists for the `mimo-v2-6-free` ID** — both trackers 404 on it, and DuckDuckGo returns no results for the SKU name. The model's capability figures therefore come from the **shared MiMo-V2.6-Flash weights** (detailed in `model/mimo-v2.6-flash/`, refreshed earlier this session) plus the repo's curated `meta.json`. They are **lineage data, not free-tier measurements**, and are labelled as such.

Capability (from the shared Flash weights — not measured on the free route):

- **SWE-bench Verified: 92.0%** (repo meta.json, Xiaomi-reported) — the strongest single coding figure associated with this family, and the model's headline
- Terminal-Bench 2.1: 87.6% (Xiaomi technical report, shared with the Flash report) — under the 88%+ reference
- **CyberGym: 95.1%** (Xiaomi technical report) — the highest CyberGym figure measured in this research series
- OSWorld-Verified: 80.8%; Toolathlon-Verified: 73.6%; JobBench: 61.2%; AutomationBench: 52.3%
- DeepSWE: 67.8%; AA-SciCode: 51.3%; ProgramBench: 26.0%
- AA-MMMU-Pro: 73.1%; AA-LCR: 74.3%; CritPt: 12.0%
- AA-HLE: 35.1%; **AA-Omniscience index −10.8, accuracy 27.2%, hallucination rate 52.2%** — the worst knowledge-reliability profile measured in this research series

Operational constraints (the free lane's actual differentiators):

- **200K/32K context and output caps on Zen** against 1M/128K natively — a 5x reduction in window
- **Training-data use during the free period** (Zen's own docs), not zero-retention
- Paid fallback $0.14/$0.28, which is itself the cheapest tier in this research series

### Normalized scores (1–100)

> **Methodology note.** The five quality dimensions are inherited from the shared MiMo-V2.6-Flash weights and scored identically to `model/mimo-v2.6-flash/` (Tool 74 / Reasoning 45 / Context 95 / Multimodal 68 / Coding 70), because the weights *are* the model. Scoring a free access tier differently on the same weights would be double-counting, and inventing free-tier-specific capability numbers would be fabrication. Where this SKU genuinely differs is **context window** (capped by Zen) and **cost efficiency** ($0), and those two are re-scored below with the constraint attached.

- **Tool use: 74/100.** Inherited from Flash (Terminal-Bench 2.1 87.6%, CyberGym 95.1% — the series' highest, OSWorld-Verified 80.8%, Toolathlon-Verified 73.6%). **No free-route measurement exists**, and the 200K cap does not change tool-use *capability*, only how much context a single task may span.
- **Reasoning: 45/100.** Inherited, and the series' worst knowledge-reliability profile: **AA-Omniscience index −10.8 with 27.2% accuracy** (more incorrect than correct answers) and **CritPt 12.0%**. The free lane inherits this unchanged.
- **Context window: 80/100.** **Re-scored down from the inherited 95 specifically for this access tier.** The weights support 1M natively, but the Zen free lane caps at **200,000 tokens with 32,768 max output** — which the methodology's tier table places in the 200K–500K band (65–84) rather than the ≥1M band. Scored at 80, mid-tier, because 200K is still a generous working window even though it is one-fifth of what the weights can do. Long-horizon work must either fit the cap or move to a paid Xiaomi host.
- **Multimodal: 68/100.** Inherited from Flash (AA-MMMU-Pro 73.1%), with the repo's meta.json confirming full **text, image, video and audio in; text out** coverage on the free route — unusual for a $0 tier.
- **Coding: 70/100.** Inherited from Flash (Terminal-Bench 2.1 87.6%, DeepSWE 67.8%, SciCode 51.3%), with the repo's meta.json adding Xiaomi's **92.0% SWE-bench Verified** as the family's headline figure. Note the free lane's 32K output cap is a real constraint for repository-scale patches.
- **Cost efficiency: 100/100.** **$0 in/out on the Zen free lane** — the methodology's 100 anchor, and the highest cost score in this research series. Held at 100 rather than given a bonus because there is nothing above it. **Two caveats attach to the number and must travel with it: the free period is time-limited, and Zen's own docs state collected data may be used to improve the model — so this is a training-data-for-compute trade, not a genuinely free lunch.** The $0.14/$0.28 paid fallback preserves the option once the free lane ends.
- **Overall Score: 67.4/100.** (74 + 45 + 80 + 68 + 70) / 5 = 67.4 → **67**. Recommendation: **the best zero-cost coding model in this research series** — a 309B/15B MIT MoE with CyberGym 95.1% (the series' highest), Terminal-Bench 2.1 87.6% and a reported SWE-bench Verified 92.0%, at $0 with full multimodal input. Use it for high-volume coding sweeps, bug-fix loops and multimodal agent work that fits inside 200K. Two hard cautions: **its AA-Omniscience index is −10.8**, the worst knowledge-reliability figure measured anywhere here, so it must never be a factual assistant; and the free lane caps output at 32K and may train on your traffic, so move confidential or long-output work to the paid $0.14/$0.28 host.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research that established a **negative finding first and worked around it honestly**: neither BenchLM nor Artificial Analysis maintains a page for the `mimo-v2-6-free` ID (both 404), and DuckDuckGo returns no results for the SKU, so no free-route capability measurement exists anywhere. The identity (Xiaomi's MIT 309B/15B Flash MoE on Zen's $0 tier, sharing weights with `mimo-v2.6-flash`) and the pricing, context and modality facts were taken from the repo's curated `meta.json`, while all capability figures are inherited from the shared MiMo-V2.6-Flash weights reported in `model/mimo-v2.6-flash/` and explicitly labelled lineage data rather than free-tier measurements. The two dimensions where this SKU genuinely differs — context (200K cap) and cost ($0 with training-data caveat) — are re-scored locally with the constraint attached. Missing benchmarks (everything not reported for the Flash variant) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenCode Zen — Console models and free-model list (free-tier access, 200K/32K cap, training-data note)](https://opencode.ai/docs/zen/)
  - [Xiaomi — MiMo V2.6 Flash model page](https://mimo.mi.com/models/en-US/mimo-v2.6-flash)
  - [Xiaomi — MiMo-V2.6-Flash-RL model card on Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
  - [Xiaomi — MiMo-V2.6 technical report (source of the shared-weight capability rows)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf)
  - See also: [`model/mimo-v2.6-flash/`](mimo-v2.6-flash.md) — the shared-weight capability tier, refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
