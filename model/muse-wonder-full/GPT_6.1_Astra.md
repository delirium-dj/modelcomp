# Muse Wonder Full — findings by GPT-6.1 Astra

- Source: Meta / `muse-wonder-full-1.0`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's larger reasoning model for sustained coding and professional agents; explicitly distinguished from Muse Wonder [1][2].
- **Provider / access:** Muse Code subscription; no public token-priced Chat Completions/Responses route established [1].
- **Release / knowledge:** 2026-10-12; knowledge cutoff unverified [2].
- **IDs:** `muse-wonder-full-1.0`; no free route verified [1].
- **Context window:** 1M; maximum output unverified [1]. Active Memory is a system feature, not additional native context.
- **Modalities:** Multimodal understanding and text/code output; exact native audio/video coverage unverified. Document and screen tasks are represented in evaluations [1].
- **Pricing (as of 2026-11-10):** Muse Code Power $50/month; Maximum $200/month. Full's input/cache/output token prices are explicitly blank; Wonder's $4/$20 must not be copied to Full [1].
- **Architecture:** Proprietary larger base model; parameter counts undisclosed [2].

### Raw benchmarks found

Exact **Full (max)** column of Meta's table [1], except SWE-Marathon marked xhigh:

Agent / tool use:
- JobBench **75.3%**; AutomationBench-AA **45.4%**; OSWorld v2.1 **78.4% partial / 39.4% binary**.
- Terminal-Bench **4.0-AA: 57.1%**. Tau2/Tau3, GDPval-AA and Claw-Eval: no verified public score found here.

Reasoning / knowledge:
- Artificial Analysis Index **56**; Vals Finance Agent v2 **59.1%**; GDP.pdf **33.2%** [1].
- GPQA/HLE/CritPt: no verified exact-model score found in the retrieved primary sources.

Coding:
- DeepSWE **1.1: 79.0%**; SWE-Marathon **57.5% xhigh**; ProgramBench **59.0%** [1].

Long context:
- MemoryBench **85.5%** [1]; not a 512K+ MRCR retrieval test. No full-window retrieval measurement verified.

### Normalized scores (1–100)

- **Tool use: 94/100.** Strong job and terminal evidence; binary OSWorld limits reliability.
- **Reasoning: 90/100.** AA and professional tests support a high rating; missing unaided scientific scores cap it.
- **Context window: 95/100.** 1M documented; system memory does not establish retrieval-ceiling performance.
- **Multimodal: 70/100.** Conservative visual-input rating; native audio/video coverage remains unverified.
- **Coding: 98/100.** DeepSWE and SWE-Marathon corroborate long-horizon coding; imperfect task success prevents 100.
- **Cost efficiency: 60/100.** Provisional subscription-value judgment at $50/month; no defensible per-token equivalence is available.
- **Overall Score: 89/100.** (94 + 90 + 95 + 70 + 98) / 5 = 89.4, half-up rounded; best suited to sustained coding through Muse Code.

---

## Signature

- Provided by: **GPT-6.1 Astra (agentrouter/gpt-6-astra)** — 2026-11-10
- Method: Fresh public search and official model-specific table; normalized judgments, not vendor scores. User-assigned reporter label; runtime ID disclosed above.
- Reference URLs:
  - [1 — Models, exact Full benchmarks and subscription prices](https://developer.meta.com/ai/models/muse-wonder/)
  - [2 — Official release](https://research.meta.ai/blog/introducing-muse-wonder/)
