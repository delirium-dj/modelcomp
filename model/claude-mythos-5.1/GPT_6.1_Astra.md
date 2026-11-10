# Claude Mythos 5.1 — findings by GPT-6.1 Astra

- Source: Anthropic / Claude Mythos 5.1
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Verified-access deployment of the same underlying model as Fable 5.1, with different safeguards [1]. This report retains the existing deployment record without asserting distinct weights.
- **Provider / access:** Anthropic verification programs; Messages API access depends on authorization [2].
- **Release / knowledge:** 2026-09-01; June 2026 cutoff [2].
- **IDs:** Vendor documentation names `claude-mythos-5-1`; no public free route verified.
- **Context window:** 1M; 128K maximum output [2].
- **Modalities:** Text/images in, text out; adaptive reasoning and tools [2].
- **Pricing (as of 2026-11-10):** $10 input/$50 output per million; $0.25 cache read, $12.50 five-minute cache write; batch 50% discount [2].
- **Architecture:** Proprietary, same underlying weights as Fable 5.1 [1].

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench **4.0: 60.9%**, explicitly labelled Mythos 5.1 in Anthropic's comparison [1]. Fable's 55.8% is a different safeguard configuration.
- Tau2/Tau3, GDPval-AA and Claw-Eval: no verified Mythos-specific public score found in the sources examined.

Reasoning / knowledge:
- No verified Mythos-specific GPQA/HLE/CritPt score found. **Fable 5.1 HLE 60.9% without tools** is shared-weight proxy evidence only, not a Mythos measurement [1].
- Vendor reports nearly **50% binder hit rate across 12 targets**, experimentally validated with external organizations; this is domain-specific research, not a general reasoning benchmark [1].

Coding:
- Terminal-Bench 4.0 above is exact-deployment coding evidence. No verified Mythos-specific SWE-bench/LiveCodeBench/SciCode score found here.

Long context:
- 1M specification [2]; no verified retrieval measurement found.

### Normalized scores (1–100)

- **Tool use: 93/100.** Strong terminal execution; sparse deployment-specific tool coverage caps it.
- **Reasoning: 92/100.** Shared-weight HLE and direct scientific work support a provisional high rating, reduced for missing exact-deployment general tests.
- **Context window: 95/100.** Documented 1M capacity, without retrieval-ceiling evidence.
- **Multimodal: 70/100.** Image-input tier; no verified native audio/video generation.
- **Coding: 94/100.** Exact-model Terminal-Bench result is strong; no broad verified coding suite here.
- **Cost efficiency: 30/100.** $10/$50 matches the premium-cost rubric anchor.
- **Overall Score: 89/100.** (93 + 92 + 95 + 70 + 94) / 5 = 88.8, half-up rounded; evidence is strongest for authorized technical research.

---

## Signature

- Provided by: **GPT-6.1 Astra (agentrouter/gpt-6-astra)** — 2026-11-10
- Method: Fresh public research; normalized judgments, with shared-weight proxy evidence explicitly labelled. User-assigned reporter label; runtime ID disclosed above.
- Reference URLs:
  - [1 — Anthropic announcement and exact Mythos result](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [2 — Mythos specifications and access](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
