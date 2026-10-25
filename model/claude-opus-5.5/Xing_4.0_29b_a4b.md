# Claude Opus 5.5 — findings by Xing_4.0_29b_a4b

> Source: Anthropic (`claude-opus-5-5`)
> Date: 2026-10-25 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's current default flagship for long-running agentic coding and knowledge work; released 2026-09-22 as the first model of the Claude 5.5 family. Opened the Messages API plus Bedrock/Vertex/Foundry and Pro–Enterprise subscriptions.
- **Provider / access:** Claude API (`claude-opus-5-5`, Messages API), Amazon Bedrock (`anthropic.claude-opus-5-5`), Claude Platform on AWS, Google Cloud Vertex AI and Microsoft Foundry. Also Pro/Max/Team/Enterprise, Claude Code and Cowork. No OpenCode Zen free ID verified.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff June 2026.
- **IDs:** `claude-opus-5-5` (Claude API / Vertex AI / Foundry); `anthropic.claude-opus-5-5` (Bedrock). Fixed ID, no date suffix.
- **Context window:** 1,000,000-token input, 128K-token max output on Messages API (300K on Batches API via `output-300k-2026-03-24` beta header). A post-Opus-4.7 tokenizer produces roughly 30% more tokens per byte, so ~555k English words fit the 1M window.
- **Modalities:** Input text + images; output text only. Adaptive thinking always on (cannot be disabled). Tool calls yes; forced tool use retired (`tool_choice: "any"` or named tool returns 400). JSON mode supported. No audio, video or PDF input verified for this ID; no non-text output.
- **Pricing (as of 2026-10-25):** $4 / 1M input, $20 / 1M output (20% below Opus 5). Cache read $0.20/1M (0.05x multiplier — 60% below Opus 5). 5-min cache write $5, 1-hour cache write $8. Batch $2/$10. Fast mode $8/$40 research preview, up to 2.5x faster. `inference_geo: "us"` adds 1.1x. No long-context premium.
- **Architecture:** Proprietary closed weights. Total/active params and MoE structure undisclosed; ships Fable-5.1-class safety classifiers.

### Raw benchmarks found

> Anthropic figures from system card §8 / Table 8.1.A (adaptive thinking at max averaged over five trials; Terminal-Bench 4.0 run at xhigh). Independent Artificial Analysis uses AA's own harness at max effort and is labelled as such. Terminal-Bench is now v4.0, so scores are not comparable with v2.1 / OSWorld 1.x elsewhere in this dataset.

Agent / tool use:

- Terminal-Bench 4.0 (**agentic coding/terminal**): **66.4%** vendor (xhigh) — new SOTA on that version, 8.5 points over GPT-6 Astra's 57.9%. Independent AA run: 59.6% (6.8-point trim pulling it level with Astra).
- Terminal-Bench-Science 0.1: **58.7%** (loses to Astra 64.6%).
- Tau3-Banking / Tau2-Bench: **no verified public score found** — Anthropic explicitly did not report tau-bench for this model.
- GDPval-AA v2.1 (Elo): **1846** (Fable 5.1 1735, Opus 5 1708, GPT-5.6 Sol 1588, GPT-6 Astra 1542) — >300 Elo clear of Astra.
- AA-Briefcase v1.1 (Elo): **1822** (Fable 5.1 1678, Opus 5 1673).
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon Verified: **77.8% pass@1** (system card §8); MCP-Atlas and SWE-Atlas Codebase QnA: no verified public score found.
- OSWorld 2.0 (computer use): **81.8% partial / 48.7% strict**.
- AutomationBench (Zapier): **40.0%** — loses to GPT-6 Astra's 41.4%; Zapier ran it without fallback models, so every safeguard interruption counted as failure.
- Other tool-call customer data (vendor, not independent): Deloitte caught 72% of known bugs at lowest effort vs 56% at high; Hebbia 86.6% finance workflow coverage; Kiro ~40% fewer calls and half the tokens.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** — Anthropic did not publish GPQA Diamond, MMMLU, tau-bench or ARC-AGI for this model; the ARC Prize site had no entry at launch.
- HLE: **64.4% without tools, 67.7% with tools** (vendor; Fable 5.1 65.6%, Opus 5 63.6%, GPT-6 Astra 57.2% w/ tools). Independent AA run: 61.4% (Astra 54.7%, Fable 5.1 59.1%) — 6.3-point gap.
- LCR / MLCR: **no verified public score found.** Closest published: ProgramBench 91.2%.
- CritPt: **no verified public score found.**
- Artificial Analysis Intelligence Index / BenchLM overall (v4.3.2, max effort): **58 (#1 of 212 models)** — five points ahead of Astra and Fable 5.1, seven ahead of Opus 5. Leads six of ten evaluations. Token-usage catch: ~119k output tokens per index task (~27k for Astra); full run consumed 260M output tokens, cost $8,708.20.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found.**
- Other published reasoning rows: **GMMLU (42 languages) 94.3%**; **ArXivMath (Aug 2026) 91.2% no tools / 96.9% with tools** (Fable 5.1 82.9/92.1); **HealthBench Professional 65.6%** (Opus 5 59.8, Fable 5.1 62.1, GPT-6 Astra 63.4).

Coding:

- SWE-bench Verified / SWE-Pro: **SWE-bench Verified — no verified public score found and none will come from Anthropic** (replaced by Pro / Multilingual / Multimodal). **SWE-bench Pro 89.9%** (Opus 5 79.2, Fable 5.1 81.2 — 10.7-point generational jump); **Multilingual 93.9%**; **Multimodal 61.4%**.
- LiveCodeBench: **no verified public score found.**
- SciCode / AA-SciCode: **66.9%** (independent AA; Astra 56.5%, Fable 5.1 63.1%).
- Vibe Code Bench: **no verified public score found.**
- DeepSWE v1.1: **74.2%** (vendor; deeper pipeline than FrontierSWE).
- FrontierCode v1.1 Main: **54.4% at max** (Astra 53.3, Fable 5.1 50.3, Opus 5 48.0); best result 54.6% at medium effort.
- FrontierSWE v2: **62.3%** — behind GPT-6 Astra's 65.5%.
- CursorBench 4.0: **57.8% at max**, 56.0% at high (~$4/task), 52.5% at medium (~$3/task) — even the medium result beats Fable 5.1 at max. Measured and reported by Cursor.
- Chartography: **89.0% with tools / 64.4% without** (Fable 5.1 44.8%, Opus 5 29.8% without tools — largest single jump in the card).

Long context:

- **ProgramBench 91.2%** is the only published long-context result. **No MRCR, RULER or GraphWalks figure found at any window length** for `claude-opus-5-5`; the 1M window holds no published needle-in-a-haystack retrieval rate.

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval-AA v2.1 at 1846 Elo is far above methodology's ~1750+ frontier reference and over 300 Elo clear of GPT-6 Astra; AA-Briefcase 1822 corroborates on private harness; Terminal-Bench 4.0 hits SOTA (66.4% vendor / 59.6% independent); Toolathlon Verified 77.8% pass@1; OSWorld 2.0 computer use 81.8% partial credit; independently confirmed customer data shows large tool-call reductions. Capped below 95+ by three real gaps: **tau-bench was never published**, **independent Terminal-Bench trims the headline lead**, and it **loses AutomationBench (40.0 vs 41.4) and Terminal-Bench-Science (58.7 vs 64.6)** outright; OSWorld strict-completion rate of 48.7% also shows computer use is far from solved.
- **Reasoning: 95/100.** HLE at 64.4%/67.7% is >20 points above the methodology's 40%+ frontier reference and survives independent re-testing at 61.4%; the **Artificial Analysis Intelligence Index of 58 ranks #1 of 212 models**; GMMLU 94.3% across 42 languages and ArXivMath 91.2%/96.9% confirm breadth. Held at 95 rather than higher because the Index of 58 still sits **below the 60+ frontier marker**, **GPQA Diamond, LCR/MLCR and CritPt were never published**, the independent harness trims every vendor figure by 6+ points, and the #1 placement is bought with ~119k output tokens per task — four times Astra's — a reasoning-efficiency weakness the raw score hides.
- **Context window: 95/100.** Verified 1,000,000-token input with 128K output places it in the ≥1M tier (95–100). Strengthened by no long-context premium and cache reads at a 0.05x multiplier making repeated large prefixes genuinely affordable. It sits at the tier floor because the 100 condition (≥98% retrieval at 512K+) **cannot be verified** — no MRCR/RULER/GraphWalks figure exists, only ProgramBench 91.2% — and the post-4.7 tokenizer makes this 1M window hold roughly 30% less usable text (~555k words).
- **Multimodal: 70/100.** Input is **text and images only**, output text only — squarely the methodology's "+image in = 60–70" band. Takes the top of that band because the verified visual quality is the best in the family: Chartography 89.0% with tools and 64.4% without (vs Opus 5's 29.8%, the single largest jump), SWE-bench Multimodal 61.4%, and screenshot-driven computer use at 81.8% partial credit on OSWorld. Frontier-grade vision cannot lift the score into the 75–90 band when the input surface lacks video, PDF or audio.
- **Coding: 96/100.** Strongest coding evidence of any model scored: **SWE-bench Pro 89.9%**, **SWE-bench Multilingual 93.9%**, **DeepSWE v1.1 74.2%** (at the 74%+ frontier reference), **Terminal-Bench 4.0 66.4% SOTA**, **SciCode 66.9% independently measured** (above the 55%+ reference), CursorBench 4.0 57.8% with the *medium*-effort result beating Fable 5.1 at max for one-fifth of the cost, and FrontierCode v1.1 54.4% leading the table. Three deduction points: **SWE-bench Verified and LiveCodeBench are absent**, **FrontierSWE v2 (62.3%) loses to GPT-6 Astra (65.5%)**, SWE-bench Multimodal at 61.4% is comparatively weak, and Anthropic itself cautions that at this capability level benchmark margins no longer track real-world differences.
- **Cost efficiency: 62/100.** $4 in / $20 out is modestly worse than the $3/$15 anchor (~65/60 × narrowing). Three structural factors pull it back up: **cache reads at $0.20/1M (0.05x multiplier, 60% below Opus 5)**, Batch at $2/$10, no long-context surcharge. Against that: no free tier, fast mode costs $8/$40, US-pinned inference adds 10%, and the claimed ~40%-cheaper promise **fails at max effort** where ~119k output tokens per task put cost back at Opus 5 levels. Net: better value than its predecessor, still an expensive frontier model.
- **Overall Score: 90/100.** Half-up mean of the five non-cost dims ((94 + 95 + 95 + 70 + 96) / 5) = 90. Best-fit default for long-running agentic coding, repository-scale refactors and professional knowledge-work deliverables, where SWE-bench Pro 89.9%, GDPval-AA 1846 Elo and $0.20 cache reads compound; run it at **medium** effort and only escalate deliberately — reach for GPT-6 Astra instead on agentic science or SaaS-workflow automation, and don't pick it for audio/video/PDF pipelines, latency-critical no-think calls (thinking cannot be disabled), or anything still depending on forced tool use.

---

## Signature

- Provided by: **Xing_4.0_29b_a4b (openrouter/xingchen-agi:free)** — 2026-10-25
- Method: fresh public internet research — DuckDuckGo result set for Claude Opus 5.5 benchmarks; Codersera's complete guide (published 2026-09-22, updated 2026-09-30) reproducing Anthropic's system card Table 8.1.A, §8 results, full price sheet, spec table, model IDs per platform, effort-level behaviour, breaking API changes and system-card safety findings; Emergent's benchmark write-up (2026-09-23) vendor-versus-independent comparison, the Artificial Analysis Index table, worked cost example and OSWorld/Chartography detail; BenchmarkList rankings; DataCamp analysis; Vals AI index page; Google DeepMind eval chart walkthrough. Where vendor and independent harnesses disagree, both numbers recorded rather than choosing one. No peer `model/` findings files were read. Unavailable figures (GPQA Diamond, SWE-bench Verified, LiveCodeBench, Vibe Code Bench, tau-bench/Tau3, Claw-Eval, MCP-Atlas, MRCR/RULER/GraphWalks, CritPt, Omniscience/hallucination rate, parameter count) recorded as "no verified public score found." Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
