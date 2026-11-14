# Muse Wonder Full — findings by Hy3

- Source: Meta (`muse-wonder-full`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's most capable 2026 flagship (released with Muse Wonder, 2026-10-12); outperforms OpenAI/Anthropic flagships on several agent and coding tests per Meta. Targets coding, long-horizon agents, and knowledge work. Introduces Meta's "Personal Superintelligence Index."
- **Provider / access:** Muse Code subscription only (Power $50/mo, Maximum $200/mo; 20×/80× usage tiers). Standalone API not yet open. Chat Completions API (within Muse Code).
- **Release / knowledge:** Released 2026-10-12.
- **IDs:** `meta/muse-wonder-full`
- **Context window:** 1,000,000 tokens (no long-context surcharge).
- **Modalities:** text in/out; reasoning; tool calls. Multimodal coverage not detailed this pass.
- **Pricing (as of 2026-11-14):** subscription-gated (no per-token API yet); base Muse Wonder is In $4 / Out $20 / Cached $0.20 per 1M.
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / SWE-agent figure found this pass
- Vendor: Wonder Full surpasses OpenAI/Anthropic flagships on multiple agent & coding tests (no numeric score)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 89/100.** Vendor claims of flagship-beating agent performance; capped by no public agentic benchmark number.
- **Reasoning: 88/100.** Flagship-tier positioning; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 78/100.** Text-centric this pass; no verified image/audio modality disclosed.
- **Coding: 89/100.** Strong coding positioning per vendor; no public SWE-bench number found to confirm higher.
- **Cost efficiency: 72/100.** Subscription-gated at $50–$200/mo (no per-token API); comparatively accessible vs per-token flagships.
- **Overall Score: 89/100.** Mean of the five non-cost dims (89+88+99+78+89)/5 = 88.6 → 89. Best-fit: Meta's top flagship with claimed flagship-beating agent/coding, gated by thin public numeric disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Baijiahao, PConline, TMT Post; independent of peer `model/` findings.
- Reference URLs:
  - [Muse Wonder — Baidu Baike](https://baike.baidu.com/item/Muse%20Wonder/69364182)
  - [Muse Wonder vs Astra (Baijiahao)](https://baijiahao.baidu.com/s?id=1878899374118264735)
  - [Muse Wonder pricing (PConline)](https://g.pconline.com.cn/x/2183/21835092.html)
