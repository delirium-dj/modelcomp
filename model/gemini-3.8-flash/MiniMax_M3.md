# Gemini 3.8 Flash — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Do not conflate with peer agent files.

- Source: Google / Gemini 3.8 Flash (`google/gemini-3-8-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's third Flash release in six weeks and "most intelligent Flash model" — significant gains over 3.7 Flash in software engineering (DeepSWE), quantitative / professional domains (Vals Finance Agent V2, Harvey LAB) and multi-step reasoning (HLE-Verified 54.9%). Top use case: cost-sensitive production agentic coding and enterprise AI workflows when a free tier with 1M context is desired.
- **Provider / access:** Google AI Studio / Gemini API (`google/gemini-3-8-flash`); OpenRouter / kie.ai / Vercel AI Gateway mirror. OpenCode Zen free tier available (the folder's `freeTierNote`). Gemini 3.8 Flash Cyber variant is gated to "trusted defenders" via Google's Fairwind Program.
- **Release / knowledge:** Released 2026-09-02 (Google blog `https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/`). Cyber variant released same day. Knowledge cutoff ≈ mid-2026 per Google.
- **IDs:** `google/gemini-3-8-flash` (canonical, with reasoning); `gemini-3-8-flash` (API slug). Free ID on Zen: yes.
- **Context window:** 1,048,576 (1M) — verified by Artificial Analysis technical-spec sheet and Google's model card.
- **Modalities:** Text, image, audio (speech), video, PDF **in**; **text out** (per AA spec sheet `artificialanalysis.ai/models/releases/gemini-3-8-flash`). Google blog demos include image generation via Nano Banana for asset generation in Antigravity apps but the model's native output is text only. Reasoning: yes (3 effort tiers: low / medium / high). Tool calls; JSON mode; long-running agentic loops with self-refinement.
- **Pricing (as of 2026-10-13):** **$0.75 / $3.75 per 1M input / output** (introductory price through 2026-12-31 — reverts to **$1.50 / $6** from 2027-01-01 per Google blog + DataCamp confirmation). Cache reads at 90% discount (≈$0.075/1M cached input at introductory rate). Free tier: Google AI Studio + OpenCode Zen (per the folder's `freeTierNote`).
- **Architecture:** Proprietary. No parameter count published; not open-weights. Built on the same "foundational intelligence" as 3.8 Flash Cyber, with Long-running agentic loops (recursively evaluates/refines) and "rigorous training in the highly demanding domain of cybersecurity" driving shared coding/reasoning gains. Three reasoning-effort tiers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** (Google developer docs, kie.ai reproduction). Up from 81.6% on Gemini 3.7 Flash.
- DeepSWE v1.1 (Long-Horizon Software Engineering): **leads most larger frontier models at fraction of cost** (Google blog; 3.8 Flash sits at Pareto-frontier cost-vs-score).
- SWE-Bench Pro: **61.6%** (Google blog; compared to 3.7 Flash's 60.4% per Datacamp).
- SWE-Atlas: **51.9%** (Datacamp; 3.7 Flash 48.0%).
- τ³-Bench Banking: **38.1%** (Datacamp; 3.7 Flash 30.9%).
- Vals Finance Agent V2: **leads** (Google announcement) for specialized finance workflows.
- Harvey LAB-AA v1.1: **leads** (Google announcement; legal agentic work, Hallucination-Gated All-Pass Rate).
- CyberGym Pass@1: **leads** (3.8 Flash Cyber variant, "surpasses 3.5 Flash Cyber and significantly larger frontier models" per Google).
- StaticBench / CWE-Bench (3.8 Flash Cyber): **47.2% pass@1** vs leading frontier model 47.8% at "significantly lower cost" — Pareto frontier.
- Chrome Security team: 3.8 Flash Cyber produced **2.6× more correct patches** than best commercial larger models.
- Wiz internal pentest benchmark: **+7.5–9.7% recall** at 2.3–5.2× lower cost vs leading frontier models.
- Real-world vulnerability discovery (3.8 Flash Cyber internal, 20 languages): **>70% success** vs 3.5/3.7 variants.
- Gray Swan IPI: "significant leap in prompt injection robustness" vs prior generation.
- AA-Briefcase / GDPval / AutomationBench-AA: covered in Intelligence Index 41.

Reasoning / knowledge:

- HLE-Verified: **54.9%** (Google blog, official). Per Scale Labs leaderboard, HLE (no tools): **44.52%** (#5; Sonnet 5.5 xhigh 46.12, Opponent A 46.44).
- GPQA Diamond (AA, Gemini 3.8 Flash High): **95.3%** — top tier of AA leaderboard. Vals: **94.4%**.
- AA Intelligence Index v4.3.2 (Gemini 3.8 Flash High): **41** — #51 of 216 measured models. Medium: 40; Low: 33. Behind Opus 5.5 (58), GPT-6 Astra (53) and Claude Fable 5.1 (53).
- CharXiv (multimodal): **86.2%** (Google, kie.ai reproduction).
- Industrial / domain tools: MMMU-Pro (visual reasoning), MLCR-AA (medical long-context), CritPt, AA-Omniscience, SciCode — covered in Intelligence Index composition.

Coding:

- SWE-bench Verified (Vals AI runs): **80.0%** (Intuitionlabs reproduction; cross-checked vs Vals leaderboard `vals.ai/benchmarks/swebench`).
- SWE-Bench Pro: **61.6%** (Google).
- DeepSWE v1.1: **leads** (Google).
- LiveBench (Gemini 3.8 Flash High row): **75.8** overall LCB score, with sub-scores 89.3, 72.5, 54.2, 91.6, 54.0, 87.8, 81.4 (LiveBench aggregator `livebench.ai`).
- Terminal-Bench 2.1: **90.8%** (agentic coding lane).
- SWE-Atlas: **51.9%** (long-horizon code atlas QA).
- FrontierCode 1.1 / Terminal-Bench-Science 0.1 / ITBench-AA: covered in AA Index v4.3.2 component evaluations.

Long context:

- 1,048,576 (1M) tokens (AA + Google model card). AA-LCR v1.1 is a component of the Intelligence Index v4.3.2.
- MLCR-AA (medical long-context reasoning) is a covered capability evaluation.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 90.8% (frontier-leading), DeepSWE v1.1 leads at fraction of cost, Vals Finance Agent V2 leads, Harvey LAB-AA leads, SWE-Bench Pro 61.6%, SWE-Atlas 51.9%, τ³-Bench Banking 38.1%, StaticBench 47.2% (Cyber variant; Pareto frontier). Cap = SWE-Bench Pro / SWE-Atlas / τ³ still trail the Opus 5.5 / GPT-6 Astra clusters, and AA Intelligence Index 41 ranks this model #51 of 216 (mid-frontier).
- **Reasoning: 85/100.** GPQA Diamond **95.3%** (AA High — near top), 94.4% (Vals). HLE-Verified 54.9% (Google harness); HLE no-tools 44.52% (Scale Labs, #5). AA Intelligence Index 41 (medium/high) — mid-frontier, ~12–17 points behind Opus 5.5. MLCR-AA included; HLE full-tools number not published. Cap = HLE (tools) and AA-Omniscience / SciCode specifics not in sources I sampled.
- **Context window: 98/100.** 1M tokens confirmed by AA + Google. Long-context component (AA-LCR v1.1) is in the Intelligence Index composition; MLCR-AA is also a covered evaluation. Falls in the 1M tier with retrieval tests → 98 (kept off 100 only because MRCR / GraphWalks-style numbers weren't published in the sources I sampled for this exact harness).
- **Multimodal: 95/100.** Text + image + audio (speech) + video + PDF in; text out (matches AA spec sheet). CharXiv 86.2%; MMMU-Pro covered; visual demos (game assets, three.js, video cross-sections) show real video understanding. Per methodology (multi-modal input coverage including video/audio/PDF) → 95.
- **Coding: 88/100.** SWE-bench Verified 80.0%, SWE-Bench Pro 61.6%, DeepSWE v1.1 leads, LiveCodeBench 75.8 (LiveBench aggregator), Terminal-Bench 2.1 90.8%, SWE-Atlas 51.9%, FrontierCode 1.1 in Index. Cap = SWE-Bench Pro and SWE-bench Verified trail Opus 5.5 (90%+); LiveCodeBench trails the 85+ frontier cohort.
- **Cost efficiency: 90/100.** $0.75/$3.75 per 1M (introductory through 2026-12-31; **jumps to $1.50/$6 from 2027-01-01** — a permanent reduction in cost-effectiveness unless the introductory rate is extended). 90% cache discount. Free tier on Zen. Cited cost per Intelligence Index task: **~$0.93** at Medium, $1.24 (DataCamp) — among the cheapest in this comparison, ~6× cheaper than Opus 5.5 max-effort per AA. Cap = introductory-only price disclosure and reversion risk; absolute best-tier capability only with non-trivial effort-level cost.
- **Overall Score: 91/100** Mean of `(88 + 85 + 98 + 95 + 88) / 5 = 90.8` → half-up **91**. Best fit: default cost-sensitive frontier for production agentic coding (especially finance / legal / enterprise workflows), research tasks needing 1M context + audio/video/PDF ingestion, and high-volume agents where free-tier availability matters more than absolute SWE-bench Verified scores. Pair with Google AI Studio for the free 1M-context playground.

---

## Signature

- Provided by: **MiniMax M3 (google/gemini-3-8-flash)** — 2026-10-13
- Method: independent MiniMax M3 evaluation drawn from the Google launch blog & Gemini 3.8 model card, Artificial Analysis release page + Intelligence Index v4.3.2 leaderboard, Intuitionlabs reproduction, kie.ai and Datacamp reproductions, Scale Labs HLE and Vals AI SWE-bench leaderboards, LiveBench aggregator, and AA technical-spec sheet (modalities, context, pricing). Per-benchmark footnotes (harness, effort tier, pricing tier) captured in-line. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

