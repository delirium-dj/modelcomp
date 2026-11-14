- Source: Anthropic/Claude Mythos 5.1
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's 2026-09-02 vetted-access flagship for cybersecurity and life-sciences research, sharing one base model with Claude Fable 5.1 but with relaxed cyber/bio safety limits. A distinct access-controlled release, not an alias; capabilities are strongest in scientific computing and protein design.
- **Provider / access:** Trusted Access programme only — vetted cybersecurity and life-science institutions; life-science access via the LSVP (Life Sciences Verification Programme). Not publicly available. API routes mirror the Claude 5 family (Anthropic API / cloud marketplaces for the public twin Fable 5.1).
- **Release / knowledge:** 2026-09-02 (some sources 2026-09-01); knowledge cutoff: no verified public score found.
- **IDs:** `claude-mythos-5-1` family ID as cited. No free Zen ID verified.
- **Context window:** 1,000,000 tokens for the Claude 5 series; no Mythos 5.1-specific verified split — no verified public score found for an exact figure.
- **Modalities:** text and image/document in, text out; autonomous long-horizon research with external tool invocation (open-source protein design/folding tools, custom GPU kernels); extended reasoning; native tool use. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** no Mythos 5.1 rate card verifiable this pass; the June 2026 Mythos/Fable 5 tier was $10 / $50 per 1M tokens and the 5.1 generation was reported to cut prices by up to 45% (Fable 5.1 figure). Access is programme-gated rather than self-serve. No Zen free ID.
- **Architecture:** Proprietary, closed weights; same underlying model as Fable 5.1 with different safety guardrails. Cybersecurity false blocks down ~60% vs Fable 5; biosafety false blocks on basic biology/medical questions down 85%. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** — above the previous Mythos 5 and above Fable 5.1's 55.8%
- Shared-base Fable 5.1 figures (lineage, measured under the Fable 5.1 ID): GDPval-AA v2 **1853 Elo**, Computer Use **80.7%**, visual chart recognition **88.4%**, OSWorld 2.0 **41.7%**, AutomationBench **31.4%**
- Long-horizon scientific workflows: autonomously invoked open-source protein design/folding tools and wrote custom GPU kernels (no scored harness figure)
- Tau3-Banking / Tau2-Bench / GDPval-AA (Mythos-specific) / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Protein design: designed binders with affinity **10x** the best competition solution on three target proteins; valid-binder hit rate close to **50%** across 12 targets vs an industry-common **10%–15%**
- Custom GPU kernels + intermediate-result caching sped up **7** open-source protein/genome deep-learning models by **1.4x–2.5x**, cutting GPU cost **30%–60%** on some whole-genome analyses
- Shared-base Fable 5.1 lineage: Humanity's Last Exam with tools **65%**, AA Intelligence Index max **53** / medium **49**
- GPQA Diamond / HLE (no tools) / LCR / CritPt / Omniscience: no verified public score found for this exact ID

Coding:

- Terminal-Bench 4.0 **60.9%** as above; shared-base Fable 5.1 lineage: Terminal-Bench-Science 0.1 **52.6%**, CursorBench 3.2.0 **73.4%**, FrontierSWE 2 **56.3%**, SWE-sweep **2.9%**
- Wrote custom GPU kernels delivering 1.4x–2.5x speedups (engineering result, not a benchmark score)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- Sustained long-running scientific research tasks with tool loops; no MRCR / RULER / GraphWalks figure found for this exact ID — no verified public score found

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 4.0 60.9% beats its public twin and the prior Mythos, and autonomous multi-tool scientific workflows are documented; capped by no scored agent benchmark beyond Terminal-Bench and by gated access limiting independent replication.
- **Reasoning: 93/100.** Exceptional domain reasoning evidence (10x binder affinity, ~50% hit rate vs 10–15%, 1.4–2.5x model speedups) plus the shared base's 65% HLE-with-tools; capped by the shared base's mid-pack AA index (53 max / 49 medium).
- **Context window: 89/100.** Claude 5-class 1M context supporting long autonomous research; capped by no verified Mythos 5.1-specific window or long-context retrieval measurement.
- **Multimodal: 84/100.** Text/image/document input with strong scientific-chart handling from the shared base (88.4% visual chart recognition); capped by text-only output, no verified audio/video input, and a weak shared-base Chartography 46.2%.
- **Coding: 92/100.** 60.9% Terminal-Bench 4.0 and real GPU-kernel engineering; capped by a shared-base SWE-sweep of 2.9% and by Opus 5.5's higher 66.4% on the same harness.
- **Cost efficiency: 58/100.** Programme-gated premium-tier pricing with no public rate card and no free lane; the 30–60% GPU-cost reductions are task-level research results, not API pricing. Excluded from Overall.
- **Overall Score: 90/100.** Half-up mean of 92, 93, 89, 84, 92 = 90.0 → 90. Best fit: vetted computational-biology and defensive-security research where relaxed guardrails and deep tool-driven scientific reasoning justify the restricted, costly access.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Claude Mythos 5 article (which documents the 5.1 generation in detail) and the Baidu Baike Claude 5 series / Fable articles for shared-base lineage. Figures measured under the Fable 5.1 or Mythos 5 ID are explicitly labelled as lineage data and never merged into Mythos 5.1's own rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Claude Mythos 5 — 百度百科 (Mythos 5.1 benchmarks, protein design, GPU kernels, safety)](https://baike.baidu.com/item/Claude%20Mythos%205/67936965)
  - [Claude 5系列模型 — 百度百科 (5.1 launch, Terminal-Bench, shared-base benchmarks)](https://baike.baidu.com/item/Claude%205%E7%B3%BB%E5%88%97%E6%A8%A1%E5%9E%8B/68556432)
  - [Fable — 百度百科 (Fable 5.1 / Mythos 5.1 relationship, pricing context)](https://baike.baidu.com/item/Fable/68576242)
