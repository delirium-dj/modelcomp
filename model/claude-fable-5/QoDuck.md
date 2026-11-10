# Claude Fable 5 — findings by QoDuck

- Source: Anthropic/Claude Fable 5 (`claude-fable-5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5 (the original June 2026 Fable/Mythos 5 generation; distinct from the later Fable 5.1 / 5.2 releases)
- **Short description:** Anthropic's previous-generation general-availability flagship, released 2026-06-09. Fable 5 is the safety-gated production variant of the same underlying weights as Claude Mythos 5: cyber/bio/chem/distillation-sensitive requests fall back to Claude Opus 4.8, which is why several benchmarks score marginally lower on Fable than on the unblocked Mythos. Now marked **Active (legacy)** with Fable 5.2 as successor.
- **Provider / access:** Anthropic Claude API (Messages API) `claude-fable-5`; Amazon Bedrock `anthropic.claude-fable-5`; also Google Cloud (Google-managed + Anthropic-managed), Microsoft Foundry, and Claude Platform on AWS. Chat/ Messages-style API, not Responses API.
- **Release / knowledge:** Released 2026-06-09; retirement not sooner than 2027-06-09. Reliable knowledge cutoff and training cutoff **January 2026**.
- **IDs:** `claude-fable-5` (Anthropic), `anthropic.claude-fable-5` (Bedrock). Mythos 5 (`claude-mythos-5`) shares specs/pricing but is gated (Project Glasswing).
- **Context window:** **1,000,000 tokens** total; **128K** max output via the synchronous Messages API (verified from platform docs).
- **Modalities:** **Text + image in → text out.** Reasoning model (Adaptive thinking always on; default effort **high**). Tool calls / function calling supported. No native audio/video/PDF input documented for this model (file/PDF ingestion appears only via the OpenRouter `:batch` wrapper, not the native API).
- **Pricing (as of 2026-11-10):** **$10 / 1M input, $50 / 1M output** (double Opus 4.8). Prompt caching: 5-minute write $12.50, 1-hour write $20, cache read **$1 / 1M**. Batch API 50% off ($5 / $25). No separate Fast-mode tier documented for Fable 5. Pro/Max/Team/Enterprise plan access through 2026-06-22, credit-based after 2026-06-23 (vendor).
- **Architecture:** Proprietary, closed weights. Same base model as Mythos 5; Fable adds production safeguards + Opus 4.8 fallback routing.

### Raw benchmarks found

> Numbers below are from the Fable 5 & Mythos 5 System Card (Table 8.1.A unless noted), the official platform docs, and independent evaluators. Where the System Card publishes a value only for the unblocked **Mythos 5** and leaves the **Fable 5** column blank (because Fable routes that task class to the Opus 4.8 fallback), I mark it explicitly rather than attributing the Mythos number to Fable.

Agent / tool use:

- GDPval-AA (**agentic Elo**, System Card, snapshot 2026-06-06): **1932** — Fable 5 #1 (Mythos Preview 1890, Opus 4.8 1769, GPT-5.5 1314). Independently corroborated by Artificial Analysis (1932).
- Terminal-Bench 2.1 (**agentic**, System Card): **84.3%** Fable 5 (production, w/ fallback) vs **88.0%** Mythos 5 (unblocked, max effort); Opus 4.8 82.7%, GPT-5.5 83.4% (Codex CLI), Gemini 3.1 Pro 70.7% (Gemini CLI).
- FrontierCode Diamond (**agentic coding**, §8.4): **29.3% score / 30.2% pass — Fable 5 #1** (also #1 on Main); Opus 4.8 13.4, GPT-5.5 5.7.
- AutomationBench (**agentic**): **17.4** Fable 5.
- OfficeQA Pro (**agentic/knowledge-work**): **57.9** Fable 5.
- Blueprint-Bench 2 (**agentic**): **38.6** Fable 5.
- Harvey's Held-Out Legal (**agentic/professional**): **13.3** Fable 5.
- GDP.pdf (**document/agentic**): **29.8** Fable 5 (Opus 4.8 24.9, GPT-5.5 16.7).
- Tau2/Tau3-Banking, Toolathon, MCP-Atlas, SWE Atlas Codebase QnA, Claw-Eval/ClawProBench: no verified public score found for this exact model/ID. Artificial Analysis names Fable 5 the frontrunner on TB-Hard + Tau2-Telecom and leads all three of its agentic benchmarks, but publishes no raw Tau number.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (**independent**, launch article 2026-06-09, max effort, Opus 4.8 fallback): **64.9 — #1 overall** at launch (~5 pts ahead of GPT-5.5). Version pre-v5; not directly comparable to the current v5 Index (where Fable 5.2 = 65, Opus 5.5 = 58). Highest on 5/10 underlying benchmarks.
- HLE (**Humanity's Last Exam**): Artificial Analysis measures **53%** for Fable 5 in production (+7 over Opus 4.8 max). System Card publishes HLE only for unblocked **Mythos 5: 59.0% no-tools / 64.5% with-tools** (Fable column blank → routes to fallback). Opus 4.8 49.8/57.9, GPT-5.5 41.4/52.2, Gemini 3.1 Pro 44.4/51.4.
- GPQA Diamond (**reasoning**, §8.8): **94.1%** published for unblocked **Mythos 5** (avg 5 trials). Anthropic deems GPQA saturated and plans to stop reporting it; Fable 5 not separately published.
- AA-Omniscience Accuracy (**independent**): **40** (+7 vs predecessor; higher accuracy, lower hallucination).
- USAMO 2026 (**proof math**, §8.10): **99.8%** for Mythos 5 at medium/high/xhigh effort (98.3% low); Opus 4.8 96.7%, Opus 4.7 69.3%. No contamination (contest post-dates training data). Fable 5 not separately published.
- RiemannBench (**research math**, §8.9): **55.0%** Mythos 5 (max effort, no tools); Mythos Preview 43.0%, Opus 4.8 34.0%. Fable 5 not separately published.
- CritPt (**physics**): **28.6%** Mythos 5. ArxivMath: **78.5%** Mythos 5. Fable 5 not separately published.
- LCR/MLCR: no verified public score found.

Coding:

- SWE-bench Verified (**coding**, System Card): **95.0%** Fable 5 (production) vs **95.5%** Mythos 5 (unblocked); Mythos Preview 93.9%, Opus 4.8 88.6%, Gemini 3.1 Pro 80.6%. Independently corroborated by morphllm (Fable 5 = 95%).
- SWE-bench Pro (**coding**, System Card): **80.0%** Fable 5 vs **80.3%** Mythos 5; Mythos Preview 77.8%, Opus 4.8 69.2%, GPT-5.5 58.6%, Gemini 3.1 Pro 54.2%. (Note: vellum.ai mislabels Fable 5 as 80.3 — that is the Mythos 5 figure.)
- Terminal-Bench 2.1 (**coding/agentic**): **84.3%** Fable 5 (see Agent/tool use).
- FrontierCode Diamond (**coding**): **29.3% — #1** (see Agent/tool use).
- LiveCodeBench, SciCode/AA-SciCode, Vibe Code Bench, DeepSWE: no verified public score found for this exact model/ID in the System Card or the independent sources reviewed.

Long context:

- GraphWalks BFS 256K (**long-context retrieval**, System Card): **91.1%** published for unblocked Mythos 5 (Fable column blank).
- GraphWalks Parents 256K: **99.96%** Mythos 5 (Fable column blank).
- Native window **1M tokens** (platform docs). No ≥98% retrieval figure at 512K+ published, so the 100/100 context ceiling is not met. MRCR/RULER: no verified public score found.

Multimodal:

- CharXiv (**chart reasoning**, System Card): **88.9% / 93.5%** published for unblocked Mythos 5 (Fable column blank). Native input is text + image only; no native audio/video/PDF or non-text output documented.

### Conflicting-results notes

- **HLE:** Artificial Analysis measures **53%** for Fable 5 *in production with Opus 4.8 fallback*; the System Card's **59.0 / 64.5%** are the *unblocked Mythos 5* numbers (Fable column intentionally blank). These are not the same measurement — I score Fable on the production 53% and treat 64.5% as the ceiling of the shared weights when safeguards are off.
- **SWE-bench Pro:** System Card Fable 5 = **80.0%**, Mythos 5 = **80.3%**. vellum.ai attributes 80.3% to Fable 5 — a mislabel; I use the System Card's 80.0%.
- **Intelligence Index vintage:** AA's **64.9 (#1)** is the *launch* measurement (pre-v5 methodology). It is not comparable to today's v5 Index (Fable 5.2 = 65, Opus 5.5 = 58). I cite 64.9 as launch-vintage evidence only.
- **GPQA / USAMO / RiemannBench / GraphWalks / CharXiv:** all published only for unblocked **Mythos 5**; Fable 5's production fallback means these are not Fable's own measured scores. Anthropic also flags GPQA as saturated.
- **Fallback rate:** Artificial Analysis observed fallback on ~8% of Index tasks / ~9% of HLE tasks; vendor (vellum) claims <5% of sessions route to Opus 4.8. The independent measurement is higher, so production Fable underperforms the shared-weight ceiling on sensitive task classes.
- **Andon Labs (independent):** unblocked Mythos 5 on Vending-Bench made *less* money than Opus 4.7 / GPT-5.5 and showed an early alignment regression — a caution against reading the headline benchmark lead as broad real-world agentic superiority.
- **Status:** Fable 5 is **Active (legacy)**; Fable 5.2 is the successor. Scores here describe the June 2026 model, not the current flagship.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency is scored independently and NEVER included.

- **Tool use: 92/100.** GDPval-AA 1932 (#1, well above the ~1750 anchor) and FrontierCode Diamond #1 push into the 90+ band; TB2.1 84.3% (production) sits just under the ~88% anchor and AutomationBench 17.4 is modest, capping it below the unblocked Mythos ceiling.
- **Reasoning: 93/100.** AA Index 64.9 (#1 at launch), HLE 53% in production (+7 over Opus 4.8), Omniscience 40, and shared-weight Mythos GPQA 94.1% / USAMO 99.8% / RiemannBench 55.0% evidence frontier reasoning; production fallback and pre-v5 Index vintage keep it just under the 95+ tier.
- **Context window: 95/100.** Native 1M tokens (≥1M tier = 95–100); GraphWalks Mythos 91.1% BFS / 99.96% Parents at 256K show strong retrieval, but no ≥98% figure at 512K+ is published, so 100 is not awarded.
- **Multimodal: 68/100.** Text + image input → text output only (no native audio/video/PDF, no non-text output); CharXiv 88.9/93.5% (Mythos) confirms capable chart/image reasoning. Lands in the +image 60–70 band.
- **Coding: 93/100.** SWE-bench Verified 95.0% / Pro 80.0% (both near the top of the System Card cohort), TB2.1 84.3%, and FrontierCode Diamond #1 (29.3%) evidence frontier coding; production fallback vs Mythos 95.5/80.3 and no DeepSWE/SciCode figure cap it below 95.
- **Cost efficiency: 30/100.** $10 in / $50 out per 1M (double Opus 4.8) maps to the ~$10/$50 ≈ 30 anchor; cache read $1 and Batch 50% off soften but do not change the list-price tier.
- **Overall Score: 88.2/100.** Half-up mean of (92 + 93 + 95 + 68 + 93) / 5 = 441 / 5 = 88.2. Best fit: high-stakes agentic coding and knowledge-work where frontier reasoning matters and the premium price + production fallback are acceptable; choose Fable 5.2 for the current flagship or Mythos 5 (gated) for unblocked cyber/bio execution.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research — official Anthropic platform docs + the Fable 5 & Mythos 5 System Card PDF (extracted via pdftotext), cross-checked against Artificial Analysis (independent), vellum.ai, morphllm, and OpenRouter. Scores are normalized 1–100 interpretations, not official vendor scores. Production Fable 5 numbers are distinguished from unblocked Mythos 5 numbers throughout.
- Reference URLs:
  - [Anthropic — Claude Fable 5 model overview (platform docs)](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [Anthropic — Claude Fable 5 & Mythos 5 System Card (PDF)](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf)
  - [Artificial Analysis — Claude Fable 5 / Mythos 5 Intelligence Index](https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index)
  - [Vellum — Claude Fable 5 and Mythos 5 benchmarks explained](https://www.vellum.ai/blog/claude-fable-5-and-mythos-5-benchmarks-explained)
  - [Morph — Claude benchmarks (SWE-bench Verified)](https://morphllm.com/claude-benchmarks)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.