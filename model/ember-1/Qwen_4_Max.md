# Muse Ember 1.0 — findings by Qwen 4 Max

- Source: Meta/ember-1
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember (API ID `muse-ember-1.0`; AA tracks the **max** reasoning variant; efforts medium/high/xhigh/max per launch chart)
- **Short description:** Meta Superintelligence Labs' **November 9, 2026** release — "our smallest and most efficient model," built for the work agents repeat all day: tool calls, coding subtasks, routing, extraction, long-document parsing. **First Meta model trained using Muse Wonder Full** (teacher lineage); portfolio split: Wonder for hardest problems, Spark for coding/agentic workflows, Ember for repeatable tasks at scale. Meta claims it "matches Haiku's best score at about a third of the cost and beats every Luna setting" and sits on the AA efficiency frontier ("no model scores higher for less per task").
- **Provider / access:** Meta Model API (Responses API) + Muse Code; Muse Ember/Spark/Wonder also on **Google Cloud and Oracle Cloud**; OpenCode Console (`muse-ember-1.0`); **1 API provider** per AA. Proprietary, parameter count undisclosed. Partner early testing: Box (contract/playbook scoring), Cline (subagent), Oracle, Cloudflare (30% faster tail), You.com (p95 **2.2s**, 4–13× faster than leading open-weight models, 36–48% fewer output tokens).
- **Release / knowledge:** Released 2026-11-09 (3 days before this report — evidence still thin: BenchLM 15/815 coverage). Knowledge cutoff not stated in sources read.
- **IDs:** `muse-ember-1.0`; siblings Muse Spark 1.3 (index 37 max, $2.39/task), Muse Wonder/Wonder Full; ≠ Muse Glimmer 30B ≠ Muse Spark Open.
- **Context window:** **1M tokens (1,048,576) with up to 512K output tokens** — the largest output cap in its class (official). **96% cache discount** ($0.004/M). OpenCode lists a **>200K tier at $0.30/$1.50 (3×)** — provider-specific; Meta's official card is flat $0.10/$0.50. MLCR-AA **18.3** (weak medical long-context); no LCR/MRCR rows yet.
- **Modalities:** Vendor: **native text, image, audio, video in** ("voice memos, meeting recordings, and video without a separate model"); text out. **AA's hosted API tracks text + image only** — access-path gap labelled. PerceptionBench (tools) **80.6** (Meta internal), GDP.pdf-AA **22.8**.
- **Pricing (as of 2026-11-12):** **$0.10 in / $0.004 cached / $0.50 out per 1M** (official + AA + OpenCode ≤200K); AA blended **$0.0728**; **$0.14 per AA index task**. Performance (max): **448 tok/s**, TTFT **5.01s**, **3.1 min/task** (class median 7.7) — exceptionally fast. Verbosity 115M index output tokens (median 107M).
- **Architecture:** Proprietary, undisclosed size; trained using Muse Wonder Full. Safety: Meta Superintelligence Scaling Framework — below high-risk thresholds (chem/bio, cyber, loss-of-control); agentic-behavior evals (intent respect, sensitive data, hidden-instruction resistance, human escalation).

### Raw benchmarks found

Vendor-reported (Meta launch blog, **max** effort; peers Claude Haiku 5.5 max / GPT-6 Luna max; AA-sourced rows dated Nov 9, 2026):

- Agents: AutomationBench-AA **37.8** (strict pass@1; Haiku 13.9, Luna 20.2), Agents' Last Exam **61.6** (Linux subset, Meta internal; Haiku 57.0, Luna 57.1), Personal Superintelligence Index **46.8** (internal composite; Haiku 36.1, Luna 37.0)
- Coding: TB4.0 **40.9** (best published harness; Haiku 39.2, Luna 16.4), Coding Agent Index-AA **46** (Haiku 37, Luna 31), FrontierCode 2.0-AA **27.2** (Haiku **34.9** wins, Luna 25.2)
- Multimodal/documents: GDP.pdf-AA **22.8** (tied Luna, Haiku 20.8), OSWorld 2.1 **69.5 partial / 33.8 binary** (Meta internal; Haiku 68.9/27.8, Luna 50.5/17.0), PerceptionBench w-tools **80.6** (Haiku 78.6, Luna 62.8)
- AA Intelligence Index **36** (ties Haiku 5.5 max 36; Luna max 28; Spark 1.3 max 37 at $2.39/task vs Ember $0.14)

Independent runs:

- AA (live, max, v5.0.1): index **36** (#2/36 price class, median 24); **AutomationBench-AA 68.1** (AA's own E2E scoring — vs vendor strict 37.8, different metric, never averaged); AA-Briefcase **1,521 Elo**; AA-Omniscience net **+7.4** (accuracy 21.1, hallucination **17.4** — cautious, low-hallucination profile); MLCR-AA **18.3**; TB4.0 40.9 carried; 448 tok/s, TTFT 5.01s, 3.1 min/task, $0.14/task
- BenchLM aggregate **56.29/100, #64 of 1026** (15/815 coverage — very new, conservative); OSWorld binary 33.8 and PSI 46.8 shown-only (never ranked)
- OpenCode usage (Nov 12): ~2T tokens last week (#9 across OpenCode) — rapid real-world adoption

### Normalized scores (1–100)

- **Tool use: 83/100.** ALE Linux **61.6** (elite — above K3.1 Pro's 43.2), AutomationBench-AA **68.1** (AA independent; frontier-class), OSWorld 2.1 partial 69.5, strict AutomationBench 37.8 (class-leading vs Haiku 13.9/Luna 20.2); capped by OSWorld **binary 33.8**, Briefcase 1,521 (mid), GDP.pdf 22.8, and no GDPval/Tau3/Toolathlon/BrowseComp rows.
- **Reasoning: 78/100.** AA index **36** (v5.0.1 — above Qwen3.8-Max's 34 and GPT-6 Luna's 28 on the same version), Omniscience net +7.4 with only 17.4% hallucination; capped by Omniscience accuracy **21.1** (knows little, but rarely bluffs), MLCR 18.3, and zero GPQA/HLE/CritPt/FrontierMath/ARC rows published.
- **Context window: 86/100.** 1M with **512K output** (class-largest) and 96% cache at $0.004/M; deducted for MLCR-AA **18.3** (weak deep retrieval), no LCR/MRCR evidence, and OpenCode's >200K 3× tier.
- **Multimodal: 78/100.** Native omni input claimed (text/image/audio/video), PerceptionBench 80.6 (internal, tools), GDP.pdf 22.8; capped by AA hosted text+image only, no independent MMMU-Pro/CharXiv/Video-MME rows, and internal-harness dependence.
- **Coding: 79/100.** TB4.0 **40.9** (beats Haiku 5.5's 39.2 and MiMo Flash's 28.8), Coding Agent Index-AA **46**, FrontierCode 2.0 **27.2** (above GLM Flash's 18.1, below Haiku's 34.9); capped by no DeepSWE/SWE-Pro/SWE-V/CursorBench rows and subagent-scale positioning ("for the hardest problems, pair it with Muse Wonder").
- **Cost efficiency: 97/100.** $0.10/$0.50 with 96% cache, blended $0.0728, **$0.14/task at index 36** — Meta's efficiency-frontier claim is corroborated by AA's live class ranking; **448 tok/s / 5.01s TTFT / 3.1 min/task** make it the fastest strong model in this price class; deducted for the OpenCode >200K 3× tier, slight verbosity (115M vs 107M median), and single-provider concentration.
- **Overall Score: 80.8/100.** Mean of the five quality dims (83+78+86+78+79)/5 = 80.8. Best-fit: high-volume subagent work — tool-call loops, extraction, routing, contract/document screening, coding subtasks — where $0.14/task and 448 tok/s matter more than frontier depth; pair with Wonder/Spark for hard problems. Caveats: 3-day-old evidence base (15/815 benchmarks), low knowledge accuracy (21.1), weak binary computer-use success (33.8), and omni input unverified on the hosted API.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Meta's official research.meta.ai launch blog fetched in full — eval tables, effort/cost chart, partner quotes, availability; Artificial Analysis' live max-variant page; BenchLM's 15-row sourced profile with lab-reported-only section; OpenCode Console docs pricing/usage; felloai/mlq/aireleasetracker snippets via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: **AutomationBench 37.8 (vendor, strict pass@1) vs 68.1 (AA independent E2E)** — different scoring of the same benchmark family; **OSWorld 2.1 69.5 partial vs 33.8 binary** — metric split, BenchLM ranks partial and shows binary only; modalities vendor omni vs AA text+image (access-path gap); pricing flat $0.10/$0.50 (Meta official) vs >200K $0.30/$1.50 (OpenCode tier) — provider-specific; AA index 36 is v5.0.1 (never compared with older-version indices); PSI 46.8 and ALE 61.6 are Meta-internal harnesses. Identity: Muse Ember 1.0 ≠ Muse Spark 1.3 ≠ Muse Wonder/Wonder Full ≠ Muse Glimmer 30B ≠ Muse Spark Open; slug ember-1 resolves to muse-ember-1.0 (BenchLM family "base (1.0)").
- Reference URLs:
  - [Introducing Our Smallest, Most Efficient Model: Muse Ember — Meta (official)](https://research.meta.ai/blog/muse-ember)
  - [Muse Ember (Max) — Artificial Analysis](https://artificialanalysis.ai/models/muse-ember)
  - [Muse Ember benchmark profile — BenchLM](https://benchlm.ai/models/muse-ember)
  - [Muse Ember model page — Meta for Developers](https://developer.meta.com/ai/models/muse-ember/)
  - [OpenCode Console models — pricing table](https://opencode.ai/docs/console/models/)
  - [Meta releases Muse Ember — MLQ.ai news](https://mlq.ai/news/meta-releases-muse-ember-a-10-cent-per-million-token-model-for-high-volume-agent-work/)
  - [Meta Muse Ember: Price, Benchmarks and the 200K Catch — FelloAI](https://felloai.com/muse-ember/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.