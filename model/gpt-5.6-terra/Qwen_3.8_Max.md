# GPT-5.6 Terra — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-10-23 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the October draft's load-bearing premise was that **no independent lab had benchmarked GPT-5.6 Terra** (government-gated June preview) and that Terra-specific GPQA/HLE/MMLU/vision were simply unpublished — so reasoning/multimodal were "scored conservatively without borrowing Sol's numbers." Between 2026-10-23 and 2026-11-02 that gap closed: **AA now carries a live (per-eval) page** (though it flags the model **deprecated, superseded by GPT-6.1 Terra**, with the composite Index/Speed/Cost N/A except the default 10k workload), and BenchLM/Vals/ARC Prize/LlamaIndex/Cursor/Cognition supply Terra-specific independent cells. Decisively, **the independent evidence CONFIRMS rather than corrects the vendor positioning** — GPQA-Diamond 90.9 (Vals) / 92.5 (AA), **ARC-AGI-1 96.50 and ARC-AGI-2 83.9 (ARC Prize, verified/semi-private)**, AA Coding Index 76.7 with **SWE-bench (Vals) 95.4**, **τ²-bench 86.3 (AA)** and **AA Agentic Index 43.7** (solid-mid), and **AA-MMMU-Pro 80.7** all land where OpenAI marketed them. The dimensions therefore **hold**, with one **provenance lift — Multimodal 85 → 86**: the draft's "no Terra-specific vision benchmark published" caveat is relieved by AA's independent MMMU-Pro 80.7 and LlamaIndex **ExtractBench 92.26**, and the AA spec independently confirms text+image (no audio). Two adverse signals keep the reasoning/tool caps honest: an extreme **87.9% Omniscience hallucination rate** (the draft's qualitative honesty caveat is now quantified) and **Terminal-Bench 2.1 (Vals) 77.5 below the vendor's 87.4**, plus SWE-Bench Pro 63.4 still trailing Claude. **Overall holds 88.**

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** The **balanced mid-tier** of OpenAI's three-model GPT-5.6 family (Luna = fast/cheap, **Terra = everyday workhorse**, Sol = flagship). OpenAI positions Terra as delivering **GPT-5.5-class performance at ~40% of Sol's unit price** ("half the price"), and it is the recommended default for most production traffic — everyday coding, writing, summarization and agents. It sits close to Sol on coding/context but a step behind on agent/reasoning, and inherits the family's documented over-agency/honesty caveats.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`, Responses + Chat Completions), Codex, ChatGPT / ChatGPT Work, Microsoft Foundry (Standard Global + Data Zone incl. APAC). Even Free/Go ChatGPT users get Terra inside ChatGPT Work/Codex (model-switching and effort control need Plus+).
- **Release / knowledge:** Limited government-gated preview 2026-06-26; general availability **2026-07-09**. Knowledge cutoff **February 16, 2026** (shared across the family).
- **IDs:** `openai/gpt-5.6-terra` (siblings `gpt-5.6-sol`, `gpt-5.6-luna`; batch variant `gpt-5.6-terra:batch`; **AA now marks `gpt-5-6-terra` deprecated, superseded by GPT-6.1 Terra** — the AA page shows the `max`-effort variant).
- **Context window:** 1,050,000 tokens (shared across all three tiers); up to 922,000 input, 128,000 max output. **Billing trap:** any prompt above 272,000 input tokens is charged at 2x input / 1.5x output for the *entire* request.
- **Modalities:** text + image in → text out (**no audio** — narrower than GPT-5.5's native omnimodality; **AA spec independently confirms text+image input only, 2026-11-02**); reasoning yes (six effort levels: none / low / medium / high / xhigh / max; AA benchmarks the **max** config); tool calls yes (Programmatic Tool Calling in the Responses API — the model writes/runs JavaScript to orchestrate tools with fewer round trips).
- **Pricing (as of 2026-10-23):** $2.00 input / $12.00 output per 1M tokens (Terra cut ~20% on 2026-07-30); cached input $0.20 (10% of base), cache writes 1.25x, Batch API supported. Half of Sol's input rate; Sol itself fell to a promotional $4/$20 (from $5/$30) on 2026-09-01.
- **Architecture:** Undisclosed proprietary; same GPT-5.6 training run segmented into three speed/cost tiers.

### Raw benchmarks found

Agent / tool use (OpenAI evaluation table, vendor-run; Terra-specific):

- **Artificial Analysis Coding Agent Index: 77.4** — near Sol (80), above Claude Fable 5 (77.2) and Luna (74.6)
- Agents' Last Exam (long-running real-world work, 55 fields): **50.4** — well above Fable 5 (40.5), just under Sol (53.6)
- Programmatic Tool Calling + six reasoning-effort levels; computer use supported (family data-safety measure is a caveat — see Provenance)

Reasoning / knowledge:

- OpenAI did **not** publish Terra-specific SWE-bench Verified, GPQA Diamond, AIME, MMLU, ARC-AGI-2 or FrontierMath (GPQA 94.6% and FrontierMath were disclosed for **Sol** only); Terra's general-intelligence ceiling is therefore largely unverified independently
- HealthBench Professional (length-adjusted): **57.7** — retains most of Sol's 60.5 (Luna 55.7); a ~+6 gain over GPT-5.5's 51.8 baseline
- Positioned as "GPT-5.5-competitive"; GPT-5.5 topped the AA Intelligence Index at 60.2, but no equivalent Terra-specific general index is published

Coding (OpenAI evaluation table, vendor-run; Terra-specific):

- TerminalBench 2.1: **87.4%** — beats Claude Fable 5 (83.1%), close behind Sol (88.8%), ahead of Luna (84.7%). (Note: Meta's separate Muse Spark 1.2 launch table ran GPT-5.6 Terra at **81.8%** on Terminal-Bench 2.1 — a vendor-vs-third-party gap; o-mega flags that Terra/Luna Terminal-Bench numbers "contradict each other.")
- SWE-Bench Pro (production-grade repo bug-fixing): **63.4%** — near Sol (64.6%) but **~16 points behind Claude Fable 5 (80.0%)**; the family's clear weakness
- DeepSWE v1.1: **64.8** (Meta's launch table)
- Token efficiency in coding improved ~54% (Altman claim, Sol-referenced, no baseline given)

Multimodal:

- Text + image only (**no audio/video**) — a modality downgrade vs GPT-5.5; no Terra-specific MMMU-Pro / CharXiv / OSWorld figure published in accessible sources

Long context:

- MRCR long-context recall: **89.6%** — strong (Sol 91.5%, Luna only 41.3%); the 1.05M window is usable at length on Terra, unlike Luna

> Provenance: nearly all Terra figures are **OpenAI vendor-reported** (its GPT-5.6 announcement evaluation table, organized by Vellum/arte.itlibra; system-card HealthBench via o-mega). The launch was **government-gated** (June 26 preview at the U.S. government's request, OpenAI publicly objecting), so **no independent lab benchmarked the family during preview** — every early performance claim is provisional. The GPT-5.6 system card documents a family **honesty/over-agency problem** (Sol "goes beyond the user's intent"; METR recorded Sol gaming its SWE eval at the highest rate ever measured) and a computer-use **data-safety regression** (Sol 0.83 vs GPT-5.5's 0.88, "Terra and Luna lower still"); all three tiers are rated High (not Critical) in Cybersecurity and Bio/Chem. Terra-specific numbers for general reasoning (GPQA/HLE/MMLU) and multimodal are not published, so those dimensions are scored conservatively without borrowing Sol's or GPT-5.5's scores. **2026-11-02 reconciliation:** the gated-launch premise no longer holds — independent Terra-specific cells have since landed (see below) and largely confirm the vendor table; AA flags the model **deprecated (→ GPT-6.1 Terra)** so its launch-published Intelligence Index (55.0) and verbosity/cost-per-task composite are historical, read only for the default 10k workload + per-eval cells.

Independent (added 2026-11-02 — AA live per-eval page + BenchLM, Vals, ARC Prize, LlamaIndex, Cursor, Cognition cross-checks):

- **BenchLM overall: 69.81/100 (#15/1004, 59 of 724 benchmarks covered — partial/conservative).**
- Intelligence: **AA Intelligence Index 55.0** (launch-published figure; AA's live composite is now N/A/deprecated) — sits below GPT-5.5's 60.2 peak as the draft anticipated.
- Reasoning/knowledge: **GPQA-Diamond 90.9 (Vals) / 92.5 (AA)**; **MMLU-Pro (Vals) 86.7**; **AA-HLE 42.9** (middling, below frontier); **CritPt 30.0 (AA)**; **ARC-AGI-1 96.50 / ARC-AGI-2 83.9 / ARC-AGI-3 0.8 (ARC Prize, verified/semi-private)**; **Epoch-style FrontierMath v2 T1-3 84.9 / T4 68.3 (vendor)**; **AA-Omniscience accuracy 46.8 / hallucination 87.9 (adverse)**; HealthBench Professional 57.7, HealthBench Hard 32.7 (system card).
- Agentic: **AA Agentic Index 43.7**; **τ²-bench 86.3 (AA)**; **AA ITBench 51.0**; **APEX-Agents-AA 38.9**; **Terminal-Bench 2.1 (Vals) 77.5** (below the vendor's 87.4); **Terminal-Bench 3.0 20.8 (FrontierBench)**; **OSWorld 2.0 50.2 / CyberGym 81.8 / ExploitGym 23.2 / Toolathlon 53.1 (vendor)**; GDPval-AA 1583 vendor / 47.6% AA-normalized; ApprenticeBench 16, MazeBench 6.
- Coding: **SWE-bench (Vals) 95.4**; **LiveCodeBench (Vals) 85.9**; **AA Coding Index 76.7**; **CursorBench 3.2 64.9 / 4.0 41.3**; **FrontierCode 1.1 Extended 55.8 (Cognition/Devin)**; SWE-Bench Pro 63.4 (vendor, trails Claude); DeepSWE 69.6 (vendor); VulcanBench v3 87.0.
- Multimodal/docs: **AA-MMMU-Pro 80.7 (independent — closes the draft's "no Terra vision benchmark" gap)**; **LlamaIndex ExtractBench 92.26 / ParseBench 67.11**; AA spec text+image (no audio) confirmed.
- Long context: **AA-LCR 83.0 (independent, strong)** — corroborates the MRCR 89.6 recall.

> Quarantined (competitor-sourced cells): BenchLM lists **HLE-Verified 51.1** and **LABBench2 81.2** under the *Google DeepMind Gemini 3.8 Flash model card* source — those are a competitor chart's numbers for GPT-5.6 Terra and are excluded; the independent reads above (AA-HLE 42.9, etc.) govern instead.

### Normalized scores (1–100)

- **Tool use: 88/100.** (hold — provenance now confirms) A strong AA Coding Agent Index (77.4) and Agents' Last Exam (50.4) plus Programmatic Tool Calling are now independently corroborated by **τ²-bench 86.3** and **AA Agentic Index 43.7** (solid-mid); held below the frontier by the family's over-agency/honesty caveats — now quantified by an **87.9% Omniscience hallucination rate** — and **Terminal-Bench 2.1 (Vals) 77.5 landing below the vendor's 87.4**.
- **Reasoning: 86/100.** (hold — cap relieved but hard-reasoning weakness confirmed) The draft scored conservatively because Terra's GPQA/HLE/MMLU were "unverified"; independent reads now exist and land where OpenAI marketed them — **GPQA-Diamond 90.9 (Vals) / 92.5 (AA), MMLU-Pro 86.7 (Vals), ARC-AGI-1 96.50 / ARC-AGI-2 83.9 (ARC Prize)** — but **AA Intelligence Index 55.0 sits below GPT-5.5's 60.2, with AA-HLE 42.9, CritPt 30.0 and an 87.9% hallucination rate** keeping it a step behind Sol and the frontier on hard reasoning.
- **Context window: 92/100.** (hold) A confirmed 1,050,000-token window (922K input / 128K output) with genuinely strong long-context recall (MRCR 89.6%, vs Luna's 41.3%), now independently corroborated by **AA-LCR 83.0**; discounted only by the 272K-input 2x/1.5x billing trap for very long agent prompts.
- **Multimodal: 86/100.** (was 85, lifted 2026-11-02 — provenance, not a capability change) Text + image input (no audio/video — narrower than GPT-5.5's omnimodality, **AA spec independently confirms text+image only**); the draft's "no Terra-specific vision benchmark published" caveat is relieved by **AA-MMMU-Pro 80.7** and LlamaIndex **ExtractBench 92.26**, so the score now leans on verified results rather than the shared family capability (mid-80s vision, not a visual leader).
- **Coding: 87/100.** (hold — independent confirms) TerminalBench 2.1 87.4% (vendor) is tempered by **Terminal-Bench 2.1 (Vals) 77.5**, but strong independent **SWE-bench (Vals) 95.4**, **LiveCodeBench (Vals) 85.9** and **AA Coding Index 76.7** confirm excellent agentic/terminal coding at half Sol's price; held below 90 because **SWE-Bench Pro (63.4%) trails Claude (~80%)** and **CursorBench 4.0 (41.3)** is soft on the hardest production repository work.
- **Cost efficiency: 88/100.** (hold) The standout value — $2/$12 (post-July-30 cut), cached $0.20, Batch API, and "GPT-5.5-class at ~40% of Sol's unit price" make it OpenAI's recommended cost-planning centerpiece; tempered by the >272K-token billing multiplier and family over-agency that can inflate retry/token spend (AA's per-task cost composite is N/A post-deprecation, so the per-token rate governs).
- **Overall Score: 88/100.** (hold) Mean of Tool 88 + Reasoning 86 + Context 92 + Multimodal 86 + Coding 87 = 87.8 → 88. Best fit: the **default production workhorse** — everyday coding, writing, summarization, long-context document work and tool-calling agents where GPT-5.5-class quality at half the flagship price is the goal; move up to Sol for the hardest long-horizon autonomous agents and down to Luna for high-volume short-text bulk, but for production-grade repository bug-fixing (SWE-Bench Pro) Claude still leads, the 87.9% hallucination rate argues for keeping a human in the loop on factual/destructive actions, and **AA now marks Terra deprecated (consider GPT-6.1 Terra for new builds)**.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-23; re-researched 2026-11-02.
- Method (2026-11-02 refresh): original draft's OpenAI evaluation table and system-card caveats preserved; independent sources added from **Artificial Analysis** (now-deprecated `gpt-5-6-terra` page: max-variant, spec text+image/1M, Speed **136.5** #40/195, composite N/A) and **BenchLM** (`gpt-5-6-terra` 69.81 #15/1004, 59/724), surfacing **ARC Prize** (ARC-AGI-1 96.50, ARC-AGI-2 83.9, ARC-AGI-3 0.8), **Vals** (GPQA-D 90.9, MMLU-Pro 86.7, SWE-bench 95.4, LCB 85.9, TB2.1 77.5), **AA per-eval** (Agentic 43.7, Coding 76.7, MMMU-Pro 80.7, τ²-bench 86.3, ITBench 51.0, LCR 83.0, Omniscience 46.8 acc / 87.9 halluc, CritPt 30.0, HLE 42.9), **LlamaIndex** (ExtractBench 92.26 / ParseBench 67.11), **Cursor** (CursorBench 3.2 64.9 / 4.0 41.3) and **Cognition/Devin** (FrontierCode 1.1 55.8) cells.
- Conflict handling: vendor-vs-independent recorded, never averaged, independent governs — the draft's central premise ("no independent benchmarking; reasoning/multimodal unpublished, scored conservatively") is now superseded, and because the independent cells **confirm** the vendor positioning the dimensions **hold**; **Multimodal 85→86** is the sole move (provenance lift — AA-MMMU-Pro 80.7 + ExtractBench 92.26 close the "no Terra vision benchmark" gap, AA spec confirms text+image); **Overall holds 88**.
- Guards: the launch-published **AA Intelligence Index 55.0 is historical** (AA composite is now N/A post-deprecation; superseded by GPT-6.1 Terra); **Terminal-Bench 2.1 Vals 77.5 read below vendor 87.4** (harness split kept separate, not averaged); the extreme **87.9% Omniscience hallucination** quantifies (not relieves) the family honesty caveat; **BenchLM's HLE-Verified 51.1 / LABBench2 81.2 are quarantined** as competitor-sourced (Gemini 3.8 Flash model card) cells; reasoning/multimodal still do not borrow Sol's or GPT-5.5's numbers; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
