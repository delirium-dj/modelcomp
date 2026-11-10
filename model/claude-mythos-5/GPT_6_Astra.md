# Claude Mythos 5 — findings by GPT-6 Astra

- Source: Anthropic / `claude-mythos-5`
- Date: 2026-11-10 (UTC)
- Note: initially saved under the wrong stem `GPT_6.1_Astra.md`; renamed to `GPT_6_Astra.md` on user order, 2026-11-10. Reporter: GPT-6 Astra.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Verified-access deployment sharing Fable 5's weights, with selected safeguards lifted; distinct from the earlier Mythos Preview [1].
- **Provider / access:** Authorized Claude Messages API and cloud deployments through verification programs [2].
- **Release / knowledge:** API documentation dates release 2026-06-09; January 2026 cutoff [2].
- **IDs:** `anthropic/claude-mythos-5`; no free API route verified.
- **Context window:** 1M; 128K output [2].
- **Modalities:** Text/images in, text out; adaptive thinking and tools [2].
- **Pricing (as of 2026-11-10):** $10/$50 input/output per million; cache read $1, five-minute write $12.50 [2].
- **Architecture:** Proprietary, same underlying weights as Fable 5 [1].

### Raw benchmarks found

The official chart is explicitly a **Mythos 5 / Fable 5 upper-envelope comparison**: it reports the higher deployment score, usually within 1–3 points. Starred tests diverge more because of Fable's safeguards. These are joint-chart figures, not two independent results [1][3].

Agent / tool use:
- Terminal-Bench **2.1: 88.0%***; GDPval-AA **1932 Elo**; OSWorld-Verified **85.0%**; AutomationBench **17.4%** [3].
- Tau2/Tau3 and Claw-Eval: no verified public score found here.

Reasoning / knowledge:
- HLE **59.0% no tools / 64.5% with tools*** [3]. GPQA/CritPt/Omniscience: no verified public score found here.
- Direct Mythos research: **9 of 14 protein targets** yielded strong design candidates, an internal research outcome rather than a standardized general benchmark [1].

Coding:
- SWE-bench **Pro: 80.3%**; FrontierCode Diamond **29.3% at xhigh** [3]. No verified LiveCodeBench/SciCode result found.

Long context:
- 1M capacity [2]; no verified retrieval measurement found. File-based memory is not native context expansion.

### Normalized scores (1–100)

- **Tool use: 91/100.** Joint-chart terminal/GDPval evidence is strong; attribution ambiguity and automation failures cap it.
- **Reasoning: 96/100.** High HLE and direct research support strong reasoning, reduced for joint-chart attribution.
- **Context window: 95/100.** Documented 1M tier, without retrieval-ceiling evidence.
- **Multimodal: 70/100.** Verified image input; broader native generation unverified.
- **Coding: 95/100.** Strong SWE-Pro, tempered by FrontierCode difficulty and joint reporting.
- **Cost efficiency: 30/100.** Premium $10/$50 API pricing.
- **Overall Score: 89/100.** (91 + 96 + 95 + 70 + 95) / 5 = 89.4, half-up rounded; strongest fit is authorized technical research.

---

## Signature

- Provided by: **GPT-6 Astra (agentrouter/gpt-6-astra)** — 2026-11-10
- Method: Fresh public search, vendor documents and direct inspection of the official chart; normalized interpretations with joint-reporting limits preserved. User-assigned reporter label; runtime ID disclosed above. File renamed from a mis-stemmed twin on user order, 2026-11-10.
- Reference URLs:
  - [1 — Joint launch and methodology](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [2 — Mythos 5 specifications](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [3 — Official benchmark chart, including attribution footnote](https://www-cdn.anthropic.com/images/4zrzovbb/website/1e65982497d7d4891219ed0e83141625a291b860-2600x2870.png)
