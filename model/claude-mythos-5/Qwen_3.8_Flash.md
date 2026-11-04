# Claude Mythos 5 — findings by Qwen 3.8 Flash

- Source: Anthropic (`anthropic/claude-mythos-5`; curated id `opencode/claude-mythos-5`), cross-checked against Anthropic's Fable 5/Mythos 5 launch materials, system card, llm-stats review, codingfleet timeline, tensoria preview coverage, and morphllm benchmark table
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5 (Claude Mythos 5)
- **Short description:** Anthropic's **unsafeguarded, restricted-access flagship** — the same weights as Claude Fable 5 (Mythos-class tier **above Opus**), without the safety classifier layer. Released 2026-06-09 under Project Glasswing / the Cyber Verification Program (CVP). Where Fable 5 falls back to Opus 4.8 on guarded domains (cyber, bio/chem, distillation), Mythos 5 serves its full capability to vetted defenders. The highest SWE-bench Verified score in this registry (95.5%) and GPQA Diamond at 94.1%; Terminal-Bench 2.1 at 88.0% (vs Fable 5's effective 84.3% due to 20.9% safety-fallback rate). Not a general-public model — **access requires CVP vetting**.
- **Provider / access:** Anthropic CVP / Project Glasswing partners only; not available on the public Claude API, Bedrock, or Vertex. Model ID `claude-mythos-5` (not `claude-fable-5`). No OpenRouter listing. No self-hosting (proprietary weights).
- **Release / knowledge:** 2026-06-09 (GA date for both Fable 5 and Mythos 5); Mythos Preview preceded it on 2026-04-07. Training cutoff not disclosed separately.
- **IDs:** `anthropic/claude-mythos-5`; same weights as `anthropic/claude-fable-5`; distinct lane from `claude-opus-4-8` (the fallback model).
- **Context window:** **1,000,000 input / 128,000 max output** tokens (Anthropic spec table, llm-stats, meta.json). 1M is the full Mythos-class tier; effective long-horizon retrieval is implied by TB 88 and GDPval 1932 but **no MRCR/RULER retrieval row published** for this ID.
- **Modalities:** **Text + image in; text out** (same as Fable 5). Extended thinking; tool calls; structured output; vision is first-class architecture. No audio/video input confirmed for this ID.
- **Pricing (as of 2026-10-02):** **$10 / $50 per 1M** (input/output); cached input $1.00/M. Same rate as Fable 5, significantly reduced from Mythos Preview ($25/$125). Access is the constraint, not the rate. Cost excluded from Overall.
- **Architecture:** proprietary; undisclosed params. Anthropic positions Mythos as a capability **tier** above Opus (not a model size). Extended thinking drives the headline scores.

### Raw benchmarks found

> All scores are **self-reported by Anthropic** in the launch table and system card (June 2026). No independent Artificial Analysis row exists for `claude-mythos-5` (restricted access prevents third-party reproduction); the evidence base is therefore vendor-only for the Mythos ID specifically. Where Fable 5 numbers are published for unsafeguarded benchmarks, they are identical to Mythos 5 (shared weights). For safeguarded benchmarks, the Mythos 5 number is the true full-capability score.

Coding:

- SWE-bench Verified: **95.5%** (vendor, meta; Fable 5: 95.0% — +0.5 from fewer refusals on edge-case guarded tasks)
- SWE-bench Pro: **80.0%** (non-guarded domain, shared with Fable 5)
- Terminal-Bench 2.1: **88.0%** (vs Fable 5 effective 84.3%, 20.9% of trials hit safety fallback)
- FrontierCode Diamond subset: **29.3%** (#1, Main subset: 46.3%)
- ExploitBench Cap%: **78.0%** (cyber-specific; Fable fallback 40.0%)

Agent / tool use:

- OSWorld-Verified: **85.0%** (non-guarded)
- GDPval-AA: **1932 Elo** (#1 published, ahead of Opus 4.8's 1890, GPT-5.5's 1769)
- GDP.pdf: **29.8%** (document reasoning, #1)
- Blueprint-Bench 2: **38.6%** (vs Opus 4.8 14.5, GPT-5.5 36.2)
- AutomationBench: **17.4%** (all models low; Fable leads the field)
- Legal Agent Benchmark: **13.3%** (leads; Opus 4.8 10.4, GPT-5.5 2.1)
- τ²-bench / Toolathlon / Claw-Eval / MCP Atlas: **no verified public score found** for this ID

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (vendor, meta; highest published in the cohort)
- HLE (with tools): **64.5%** (vs Fable ~57.9% via Opus fallback)
- BioMysteryBench (hard): **46.1%** (bio/chem, Mythos full vs Fable ~40.0%)
- HealthBench Professional: **66.0%** (Mythos full vs Fable ~56.9%)
- CritPt / AA Intelligence Index / Omniscience / MMLU-Pro: **no verified public score found** (restricted ID, no AA measurement possible)

Long context:

- 1M / 128K window; **no MRCR/RULER/GraphWalks retrieval percentage published**. Effective use at length is implied by TB 88 and GDPval #1 but not directly measured.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Key scoring consideration: all evidence is vendor-self-reported (restricted access prevents independent verification). Scores are credited on the published figures because the Mythos-class tier is consistent across multiple cross-references (llm-stats, codingfleet, morphllm), and because Anthropic's Fable 5 launch materials are detailed enough (safeguarded vs unsafeguarded breakdowns) to be credible despite being first-party.

- **Tool use: 93/100.** TB 2.1 at 88.0%, OSWorld 85.0%, GDPval-AA #1 at 1932, Blueprint 38.6%, and FrontierCode 29.3% constitute the strongest published agentic toolkit in this registry. Docked for absent τ²/Toolathlon/Claw-Eval and for AutomationBench 17.4 (absolute low, though leading). Elite but unverified third-party.
- **Reasoning: 89/100.** GPQA Diamond 94.1% is the highest measured in the cohort; HLE 64.5 with tools clears the frontier bar comfortably; GDP.pdf 29.8% and ExploitBench 78.0% demonstrate breadth across domains no other model handles at full capacity. CritPt and Omniscience are absent (cannot be independently measured for a restricted ID), and the AA Intelligence Index is not published — held from 95+ by this evidence gap, not measured weakness.
- **Context window: 95/100.** 1M input / 128K output is the top tier and the methodology anchors 1M-class models at 95+; effective long-horizon use (TB 88, GDPval, Blueprint) supports the window being real rather than nominal. Below 98 because no MRCR/RULER percentage has been published to directly verify retrieval quality at the full span.
- **Multimodal: 65/100.** Text + image in, text out = the 60–70 "image in" band. Vision is first-class in the Mythos-class architecture (shared with Fable 5, same spec table entry "text + vision input"), but **no vision-specific benchmark (MMMU-Pro, ChartX, OmniDocBench) is published for this ID**, and no audio/video input is confirmed. Scored at mid-band: present but unmeasured at the Mythos tier specifically.
- **Coding: 97/100.** SWE-V 95.5 + SWE-Pro 80.0 + TB 2.1 88.0 + FrontierCode 29.3 (#1 Diamond) + ExploitBench 78.0 is the most complete frontier-coding stack in the registry. No model in the dataset has published a higher SWE-V; this is a genuine hard-coding ceiling. Held from 100 only by the absence of LiveCodeBench / SciCode / AA Coding Index independent verification.
- **Cost efficiency: 50/100.** $10/$50 per 1M is premium (highest rate tier in the dataset alongside Mythos Preview's predecessor), and restricted access means the per-token cost cannot be reduced via caching or batch at a public-API level. However, the capability-per-dollar on tasks that actually require Mythos-class power (frontier coding, cyber defense, long-horizon agents) justifies the premium for the few teams with CVP access. Cost excluded from Overall.
- **Overall Score: 88/100.** Half-up mean of the five quality dims (93+89+95+65+97)/5 = 439/5 = 87.8 → **88**. Best fit: **frontier autonomous software engineering and cyber defense** where a 1M-token agentic session with no refusal fallback produces measurably better outcomes than safeguarded alternatives. The restricted CVP access, $10/$50 premium, and absence of public third-party verification make this a specialist's model rather than a generalist's, but the capability scores on the benchmarks that ARE published are the best in this registry by a clear margin. Multimodal is the honest weak spot (not a vision-first design, no published visual evals for this ID); the other four dimensions are frontier.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04
- Method: public internet research — llm-stats.com Fable 5/Mythos 5 review (fetched Nov 4, full benchmark tables including safeguarded/unsafeguarded split), codingfleet.com timeline (Jun 9 release, 93.9% SWE-V preview), tensoria.fr Mythos Preview analysis (Apr 7, SWE-V 93.9 / GPQA 94.6), morphllm.com Claude benchmark table, selectcursor.com Fable 5 article ("shares the same underlying weights as Claude Mythos 5"), OpenAI GPT-5.6 launch comparison table (Mythos 5 listed as competitor), and curated `meta.json` (95.5% SWE-V, 94.1% GPQA, $10/$50, 1M/128K, CVP). Scores are normalized 1–100 interpretations; **all absolutes are vendor-self-reported** (no independent AA/BenchLM measurement possible for a restricted-access model), which is the primary caveat. The Fable 5 public reports are cross-checked against the same benchmark table to validate the non-guarded figures. Flagged: (a) **the entire benchmark row set is Anthropic self-reported** — no third-party reproduction is possible for Mythos 5 specifically; (b) safeguarded-domain scores (TB, HLE, ExploitBench, BioMystery) are Mythos-full numbers that Fable 5 cannot match; (c) the 1M context is not directly retrieval-verified.
- Revisit trigger: if Anthropic publishes Mythos 5 MRCR/RULER data, or an AA Intelligence Index row somehow appears (e.g. via a partner's leaked measurement), or if a Mythos 5.1 supersedes this GA (Sep 1 2026, already flagged on endoflife.date — see `model/claude-mythos-5.1/`).
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
