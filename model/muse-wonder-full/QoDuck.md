# Muse Wonder Full — findings by QoDuck

- Source: Meta (`muse-wonder-full-1.0`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta Superintelligence Lab's most advanced model (released 2026-10-12), the larger sibling of consumer Muse Wonder / Muse Wonder 1.0. Leads long-horizon coding (DeepSWE 1.1, SWE-Marathon) and memory/agentic tasks; built around Active Memory + Active Focus. Distinct entry — not an alias of Muse Wonder 1.0 (the smaller API model).
- **Provider / access:** Meta. **Subscription-only via Muse Code** — included on **Power Usage ($50/mo)** and **Maximum Usage ($200/mo)** tiers; NOT on Everyday ($5) or High ($15). **No public Model API access and no per-token price** for Full (the $4/$20 API and OpenRouter `meta/muse-wonder` route serve regular Muse Wonder `muse-wonder-1.0`, not Full). Contributor mode (on by default) trades submitted content for training in exchange for more usage.
- **Release / knowledge:** Released **2026-10-12**; knowledge cutoff **not published**. Trained at Meta's gigawatt-scale Prometheus data center.
- **IDs:** `muse-wonder-full-1.0` (dev.meta.ai). No API ID / Free ID — Full cannot be called through the public Model API; raising effort on regular Wonder does not select Full.
- **Context window:** **1M** tokens (1,048,576; model page/card). Max output **not published**. kingy notes no million-token recall was tested ("capacity is not proof of recall").
- **Modalities:** text + image + video + audio + PDF in → **text out** (documented for regular Muse Wonder; **inferred shared** for Full — no separate Full spec table published). Reasoning effort minimal→max; tool calling, structured output, search grounding, computer use. API formats (regular Wonder): OpenAI Responses / Chat Completions, Anthropic Messages.
- **Pricing (as of 2026-11-10):** Full = **$50/mo (Power)** or **$200/mo (Maximum)** subscription, no per-token rate. (Regular Wonder API: $4 in / $20 out / $0.20 cached per 1M, ~$4.52/AA task — NOT Full.) Regional offers vary; kingy paid CA$68.99/mo at checkout.
- **Architecture:** **closed weights** ("like Claude or GPT"); parameter count / MoE details undisclosed.

### Raw benchmarks found

> Independent: Artificial Analysis Index, Terminal-Bench 4.0, AA-Omniscience, GDP.pdf, cost/token. Vendor (Meta's own runs, incl. of third-party-designed benchmarks): DeepSWE, SWE-Marathon, MemoryBench, FocusBench, Personal Superintelligence Index, Harvey LAB, AutomationBench, JobBench, HealthBench Pro.

Agent / tool use:

- DeepSWE 1.1 (**vendor**, Meta table): **79.0 — #1** (regular Wonder 78.8, Opus 5.5 74.2, GPT-6 Astra 74.1, Fable 5.1 67.4).
- SWE-Marathon (**vendor**, xhigh effort): **57.5 — #1** (Wonder 53.1, Opus 5.5 46.3, Astra 42.5, Fable 45.6). Comparison flagged unfair — rivals ran through Codex/Claude Code (mixed harness effects).
- MemoryBench (**vendor**): **85.5** (Wonder 85.6).
- JobBench (**vendor**): **75.3** (Wonder 70.5).
- Harvey LAB-AA (legal, **vendor**): **13.1** (Wonder 10.0; **Opus 5.5 only 4.2** — Full leads).
- OSWorld V2.1 (**vendor/independent**): **78.4 partial / 39.4 binary** (Opus 5.5 81.8; Wonder 72.6/34.3).
- AutomationBench-AA (**vendor**): **45.4** (Wonder 39.1).
- Personal Superintelligence Index (**Meta internal**): **59.1**; Vals Finance Agent V2 **59.1**; HealthBench Pro **62.3**.
- Terminal-Bench 4.0-AA (**independent**): **57.1** (Opus 5.5 59.6, Astra 59.1, Argon ~57 tie; Wonder 52.0).
- GDPval-AA / Tau3 / Claw-Eval: no verified public score found (GDP.pdf 33.2 is a PDF-understanding metric, not GDPval Elo).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (**independent, v4.3**): **56** — tied Sonnet 5.5, below Opus 5.5 (58), above Fable 5.1 / Astra / Argon (53). **Meta's model card claims 59.0** (vendor); dev.to flags the 56-vs-59 discrepancy as unexplained. Scored on independent 56.
- AA-Omniscience (**independent**): **30** — well below Opus 5.5 (46) and Astra (43), signaling weaker factual knowledge / higher hallucination.
- GPQA Diamond / HLE / ARC-AGI / LCR / CritPt: no verified public score found.
- Launch vintage note: 56 was near-top at Oct 12 launch; by 2026-11-09 Fable 5.2 reached 65, so Full's relative rank has since slipped.

Coding:

- DeepSWE 1.1: **79.0 (#1, vendor)** — see above; clears the 74% coding anchor by ~5 pts.
- SWE-Marathon: **57.5 (#1, vendor)**.
- ProgramBench (**vendor**): **59.0** (Wonder 50.0; **Opus 5.5 70.5** — Full trails badly).
- Terminal-Bench 4.0-AA: **57.1 (independent)** — mid-pack, trails Opus 59.6.
- SWE-bench Verified / Pro / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found.

Long context:

- 1M context window; MemoryBench 85.5 (Active Memory). No MRCR/RULER/GraphWalks retrieval-at-length figure; kingy did not test million-token recall.

### Conflicting-results notes

1. **AA Index vendor vs independent:** Meta's card lists **59.0**; independent Artificial Analysis v4.3 measures **56** (dev.to calls the gap unexplained). Scored on the independent 56, which trails Opus 5.5 (58).
2. **"Independent third-party runs" claim:** dev.meta.ai says Full tops DeepSWE/SWE-Marathon "in independent third-party runs," but dev.to classifies those scores as **vendor-reported** (Meta's own runs of third-party-designed benchmarks). The leadership is real but not independently verified; SWE-Marathon's cross-harness comparison is explicitly unfair.
3. **Reasoning vs knowledge split:** frontier Index 56 (reasoning) coexists with **AA-Omniscience 30** (weak factual knowledge / hallucination vs Opus 46) — strong problem-solving, weaker recall.
4. **Access/price conflation:** Full is **subscription-only ($50/mo Power), no API/per-token price**. The widely cited $4/$20 and ~$4.52/task belong to **regular Muse Wonder** (Index 52, ~4 points lower); API users cannot call Full.
5. **Benchmark lead vs real-world value (kingy, independent):** Full passed all 8 utility tasks, but regular Wonder also passed all with **no extra quality** and was faster; on 4 Flask repo jobs Full 4/4 in **26:39** vs Opus 5.5 4/4 in **8:53** (3× slower) and GPT-6.1 Sol 19:05. Full consumes more usage meter. Bottom line: no measured quality gain justifying $50 for routine work.
6. **Not uniformly leading:** Full leads DeepSWE/SWE-Marathon/Harvey LAB but **trails Opus 5.5** on AA Index (56<58), TB4 (57.1<59.6), ProgramBench (59.0<70.5), OSWorld (78.4<81.8).
7. **Undocumented Full specs:** modalities, max output, cutoff, architecture are published only for regular Wonder (text/image/video/audio/PDF in, closed weights); Full's are inferred shared, not separately confirmed.

### Normalized scores (1–100)

- **Tool use: 90/100.** DeepSWE 79.0 (#1) and SWE-Marathon 57.5 (#1) long-horizon leadership, MemoryBench 85.5, JobBench 75.3, Harvey LAB 13.1 (> Opus 4.2), OSWorld 78.4. Capped below 93 by mid-pack independent TB4 (57.1), vendor-reported coding leads, and AutomationBench 45.4.
- **Reasoning: 87/100.** Independent AA Index 56 (near-top at launch, > Fable/Astra/Argon 53) but trails Opus 58; **AA-Omniscience 30** signals weak factual knowledge. Capped by no GPQA/HLE and the vendor-vs-independent Index gap.
- **Context window: 95/100.** 1M total window (≥1M tier) with strong Active Memory (MemoryBench 85.5); no retrieval-at-512K figure reported, so not 100.
- **Multimodal: 85/100.** Rich input — text/image/video/audio/PDF → text out (inferred from regular Wonder's documented modalities; Full table unpublished). Capped below 90 by text-only output and the inference uncertainty.
- **Coding: 92/100.** DeepSWE 1.1 79.0 (#1, clears 74% anchor by ~5 pts) and SWE-Marathon 57.5 (#1). Capped below 95 because the leads are vendor-reported, independent TB4 (57.1) and ProgramBench (59.0) trail Opus 5.5, and no SWE-bench Pro is published.
- **Cost efficiency: 30/100.** Full is gated behind $50/mo Power (no per-token API); kingy found no quality gain over the $4/$20 regular Wonder for routine work and 3× slower than Opus 5.5. Premium subscription with weak marginal value unless Full completes jobs Wonder cannot.
- **Overall Score: 89.8/100.** Mean of the five quality dims (90+87+95+85+92)/5 = 89.8. Best fit: long-horizon agentic coding and memory-heavy personal/professional work for Muse Code Power subscribers — but routine tasks are faster and cheaper on Opus 5.5 or regular Muse Wonder.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research — official Meta Research blog and dev.meta.ai model docs, plus independent sources (Artificial Analysis Index v4.3, dev.to benchmark analysis, kingy.ai hands-on Muse Code tests, agent-one.dev specs). ≥3 independent web searches plus five primary/independent fetches; vendor vs independent (AA Index 59 vs 56; DeepSWE/SWE-Marathon reporting) and benchmark-vs-real-world conflicts reconciled above. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Research — Muse Wonder: A Frontier Model for Personal & Professional Agents](https://research.meta.ai/blog/muse-wonder)
  - [Meta Dev — Muse Wonder model docs](https://dev.meta.ai/models/muse-wonder)
  - [kingy.ai — Is Muse Wonder Full Worth $50 a Month? Muse Code Tests](https://kingy.ai/blog/muse-wonder-full-pricing-benchmarks-comparison/)
  - [dev.to — Muse Wonder Benchmarks (independent analysis)](https://dev.to/hassann/muse-wonder-benchmarks-1h1n)
  - [agent-one.dev — Meta Muse Wonder: Benchmarks, Pricing, API](https://www.agent-one.dev/blog/muse-wonder)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/)
  - [OpenRouter — Meta Muse Wonder (regular API model)](https://openrouter.ai/meta/muse-wonder)
  - [TechCrunch — Meta releases its first frontier model, Muse Wonder](https://techcrunch.com/2026/10/12/meta-releases-its-first-frontier-model-muse-wonder/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.