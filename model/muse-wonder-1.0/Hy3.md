# Muse Wonder 1.0 — findings by Hy3

- Source: Meta (`muse-wonder-1.0`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's standard 2026 flagship (2026-10-12), paired with the stronger Wonder Full. Targets coding, long-horizon agents, and knowledge work. The only Wonder variant callable via the public Meta Model API (`muse-wonder-1.0`).
- **Provider / access:** Meta Model API, Muse Code (`muse-wonder-1.0`). Chat Completions API.
- **Release / knowledge:** Released 2026-10-12.
- **IDs:** `meta/muse-wonder-1.0`
- **Context window:** 1,000,000 tokens (no long-context surcharge).
- **Modalities:** text in/out; reasoning; tool calls. Multimodal coverage not detailed this pass.
- **Pricing (as of 2026-11-14):** In $4.00 / Out $20.00 / Cached $0.20 per 1M tokens (Meta Model API).
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (Wonder Full): **57%** (CSDN; +24 pts vs prior gen — base Wonder 1.0 expected lower)
- No verified public Terminal-Bench figure for base Wonder 1.0 specifically this pass

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 82/100.** Agentic coding positioning; capped by no public Terminal-Bench number for the base variant.
- **Reasoning: 84/100.** Flagship-tier positioning; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 75/100.** Text-centric this pass; no verified image/audio modality disclosed.
- **Coding: 84/100.** Coding-focused positioning; no public SWE-bench number found to confirm higher.
- **Cost efficiency: 80/100.** $4/$20 per 1M via public API — competitive with flagship-tier peers.
- **Overall Score: 84.8/100.** Mean of the five non-cost dims (82+84+99+75+84)/5 = 84.8 → 85. Best-fit: solid public-API Meta flagship with strong long-context, gated by thin public numeric disclosure. (Note: queue-listed at 90.6; independent research yields a more conservative read.)

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, PHP.cn, Baijiahao, CSDN; independent of peer `model/` findings.
- Reference URLs:
  - [Muse Wonder — Baidu Baike](https://baike.baidu.com/item/Muse%20Wonder/69364182)
  - [Muse Wonder API call (PHP.cn)](https://www.php.cn/faq/3289349.html)
  - [Muse Wonder vs Opus/Astra (CSDN)](https://blog.csdn.net/weixin_34064233/article/details/170694008)
