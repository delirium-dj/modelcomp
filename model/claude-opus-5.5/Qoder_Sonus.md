# Claude Opus 5.5 — findings by Qoder Sonus

- Source: Anthropic / Claude Opus 5.5; production API with default safety fallback, primarily max effort unless a result specifies otherwise.
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Opus 5.5.
- **Short description:** Proprietary long-horizon coding and knowledge-work model with strong independent scientific-coding and professional-work results. Production safeguards can route certain tasks to older Claude models, so published default-fallback results describe the deployed product, not necessarily isolated Opus 5.5 weights [S1, S4].
- **Provider / access:** Anthropic Messages API, Claude/Claude Code, Amazon Bedrock, Google Cloud, and Microsoft Foundry [S2]. Zen exposes `claude-opus-5-5` through `https://opencode.ai/inference/anthropic/v1/messages` [S8]. This is not a native OpenAI Responses endpoint.
- **Release / knowledge:** Released **2026-09-22**; reliable knowledge and training-data cutoffs **June 2026**; Anthropic-operated-platform retirement not sooner than **2027-09-22** [S2, S3].
- **IDs:** Anthropic `claude-opus-5-5`; Bedrock `anthropic.claude-opus-5-5`; Zen `opencode/claude-opus-5-5` [S2, S8]. The repository's dotted folder spelling is not the vendor API spelling. No free Zen ID verified.
- **Context window:** **1M tokens**; **128K maximum synchronous output**. **300K output** is a separate Message Batches beta with `output-300k-2026-03-24`, not the ordinary request limit [S2]. The current tokenizer fits approximately **555K words** in 1M tokens, versus approximately 750K with older pre-4.7 tokenization; token counts are not equal-content cross-model guarantees [S3].
- **Modalities:** Text/images and visual PDF input, text output, vision and tool use [S2, S3, S7]. No native audio/video input or audio/image generation was verified. Adaptive thinking is always enabled; default effort is **medium**, with low/medium/high/xhigh/max settings [S2, S4]. Forced tool use is unsupported, and older computer-use tool integrations require migration [S2].
- **Pricing (as of 2026-10-27):** **$4 input / $20 output / $0.20 cached input per million tokens**; **$5** five-minute cache write and **$8** one-hour cache write. Batch input/output are **50% discounted** [S2]. Fast mode is separately priced at **$8/$40**, with vendor-claimed speed up to 2.5× [S1]. Standard paid pricing is scored; no free promotion is assumed. Anthropic says zero-data-retention access is available, not that every deployment is automatically ZDR [S1].
- **Architecture:** Proprietary; no verified total/active parameter counts or public weight license. AA explicitly labels the evaluated model proprietary [S5].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **59.6% at max with default fallback**, independent AA evaluation [S4]. Anthropic reports **66.4% at xhigh**, with **±2.6 percentage points standard error**, its highest-scoring setting [S1]. Different effort/harness conditions prevent averaging these into a single result.
- Terminal-Bench 2.1: no verified public score found; TB4.0 is not relabeled as 2.1 or compared directly to its older 85%–88% reference range.
- GDPval-AA v2.1: **1,846 Elo**, AA max evaluation, also reproduced in Anthropic's launch table [S1, S4]. These are the same evidence lineage, not two independent trials.
- AA-Briefcase v1.1: **1,822 Elo**, independent AA evaluation using the Stirrup reference agent; **143 Elo** above Fable 5.1 at publication [S4].
- AutomationBench: **40.0%**, run by Zapier and reported in Anthropic's launch table **without fallback**, counting safeguard interventions as failures [S1]. AA separately identifies AutomationBench-AA as a strength without publishing an exact figure in the retrieved article [S4].
- OSWorld 2.1: **81.8% partial-credit** score, vendor launch table [S1]; not binary full-task success.
- Tau3-Banking / Tau2-Bench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found in the consulted evidence.

Reasoning / knowledge:

- Humanity's Last Exam: **61.4%**, independent AA max/default-fallback result [S4]. Anthropic separately reports **67.7% with tools** [S1]. AA's article does not specify the exact tool configuration for its HLE figure; do not assert a controlled tools-off/tools-on experiment.
- Artificial Analysis Intelligence Index: **58, rank 1/221**, current page explicitly using **v4.3.2** [S5]. Its component set includes TB4.0, GDPval-AA v2.1, AA-Briefcase v1.1, AutomationBench-AA, HLE, SciCode, GDP.pdf, CritPt, AA-Omniscience, and AA-LCR v1.1. This 58 is not numerically comparable to older index generations.
- Terminal-Bench-Science 0.1: **58.7%**, Anthropic max/default-fallback result; reported per-model standard errors span **±3.5–5 points** [S1]. This is agentic scientific work, not GPQA.
- GPQA Diamond / LCR or MLCR exact percentages / CritPt exact percentage / Omniscience Accuracy and Hallucination Rate: no verified public score found. AA says Opus trails the leaders on CritPt, AA-LCR, and GDP.pdf, but the retrieved text supplies no exact values [S4].
- A search result claimed GPQA **96.0%** and near-perfect MRCR, while other results said these were not disclosed. Neither exact claim was substantiated by the official card or independent AA text reviewed; they are excluded from scoring and not treated as measured Opus evidence.

Coding:

- SciCode: **66.9%**, independent AA max/default-fallback result [S4].
- FrontierCode v1.1 Main: **54.4% max** in Anthropic's launch table; the same page reports **54.6% medium** [S1]. The small non-monotonic difference is not proof that more reasoning always helps.
- CursorBench 4.0: **57.8% max / 52.5% medium**, vendor-reported [S1].
- SWE-bench Verified / SWE-Pro / LiveCodeBench / DeepSWE / Vibe Code Bench / separate Coding Index: no verified public score found in the consulted sources; modern coding benchmarks are retained under their actual names.
- Endor Labs Agent Security League, **Claude Code + Opus 5.5**, run dated **2026-09-24**: **68.7% FuncPass / 33.5% SecPass**, independently reported on the live leaderboard [S6]. It now ranks **fourth** among listed agent/model combinations by secure correctness, not the third-place launch rank repeated in older reviews.
- Endor's methodology describes **200 tasks from 108 Python projects across 77 CWE classes**, with workspace sanitization, prompt hardening, and cheating detection [S6]. FuncPass means working code; SecPass additionally requires security tests. These percentages are benchmark outcomes, not the fraction of arbitrary production code that is safe.

Long context:

- Official capacity is **1M tokens** [S2]; no independently verified exact MRCR/RULER/GraphWalks retrieval percentage found for this model. AA identifies long-context reasoning as a relative weakness [S4]. Capacity is credited without inventing a near-perfect retrieval score.

### Evidence reconciliation and limitations

1. **Fallback matters.** Anthropic states that production interventions route cybersecurity work to Opus 4.8 and biology/frontier-model-development work to Opus 5 [S1]. AA ran all five effort settings with default fallback enabled [S4]. The report evaluates that deployable behavior; it does not transfer older-model benchmarks into Opus scores.
2. **Marketing safety and secure code are different.** Anthropic's prompt-injection and behavioral-safety claims do not contradict Endor's much lower secure-code success. They test different failure modes. Functional success also does not imply security success: Endor's 68.7% versus 33.5% gap remains material [S1, S6].
3. **Memorization evidence is qualified.** The dedicated Endor article returned only its title through text fetch. Its indexed snippet and a detailed secondary review report **51 memorized solutions** and explain that contaminated successes were removed [S9, S10]. The accepted 68.7%/33.5% pair was separately verified on Endor's live leaderboard [S6]; unadjusted scores are not used. PromptQuick explicitly did not run the tests and is not counted as another experiment.
4. **Cheap tokens do not guarantee cheap max-effort work.** Anthropic's **40% typical workload savings** concerns default settings [S1]. AA max uses approximately **119K output tokens per task versus 73K for Opus 5 max**, roughly 1.6×, and the current max page reports **$5.98 per index task** [S4, S5]. Both can be true because effort and workload differ.
5. **Native modalities stay bounded.** Visual PDF support is verified [S7], but producing slides, charts, or media files through tools does not establish native image/video/audio generation. This limits the multimodal rating despite excellent chart recognition: Anthropic's **89.0% Chartography with tools** [S1].

### Normalized scores (1–100)

Scores describe the paid production model, primarily at max/default fallback; effort-specific observations remain labeled. Harder modern benchmark percentages are not mapped directly onto older TB2.1 thresholds.

- **Tool use: 97/100.** AA GDPval-AA v2.1 1,846, Briefcase 1,822, and TB4.0 59.6% demonstrate leading agentic ability [S4]; safeguard routing, forced-tool limitations, and incomplete end-to-end workflow success cap the score.
- **Reasoning: 95/100.** Independent HLE 61.4% and leading current index support exceptional reasoning [S4, S5]; missing exact GPQA/retrieval evidence and relative CritPt/LCR weaknesses prevent maximal credit.
- **Context window: 95/100.** Verified 1M context reaches the top capacity tier [S2], but no verified 98%+ retrieval result at 512K+ supports the rubric's 100-point condition.
- **Multimodal: 85/100.** Strong image and visual PDF processing, including tool-assisted chart recognition, supports the document-vision tier [S1, S7]; no verified native audio/video or non-text output caps breadth.
- **Coding: 94/100.** Independent SciCode 66.9% and strong TB4.0 results support frontier coding [S4]; Endor's 33.5% secure correctness and memorization concerns require a material reliability caveat [S6, S10].
- **Cost efficiency: 58/100.** $4/$20 base pricing is premium, partly offset by $0.20 cache reads and medium-effort efficiency [S1, S2]; AA's $5.98 max-effort task cost prevents treating it as a budget endpoint [S5].
- **Overall Score: 93/100.** Half-up rounding of (97 + 95 + 95 + 85 + 94) / 5 = 93.2; cost excluded. Best for demanding repository and knowledge work with explicit security tests and awareness of fallback behavior.

### Sources and search audit

All sources accessed 2026-10-27. Six successful independent searches: `Claude Opus 5.5 Anthropic official model card benchmarks pricing`; `Claude Opus 5.5 independent benchmark Artificial Analysis Terminal Bench coding evaluation`; `site:artificialanalysis.ai "Opus 5.5" "58"`; `site:endorlabs.com "Opus 5.5" benchmark security`; `"Opus 5.5" "Endor" "33.5" "memorization"`; `"Opus 5.5" "MRCR" "GPQA"`.

- [S1 — Anthropic launch, benchmark settings, safeguards, and pricing](https://www.anthropic.com/claude-opus-5-5)
- [S2 — Official Opus 5.5 model specifications](https://platform.claude.com/docs/en/models/opus-5-5/overview)
- [S3 — Official model overview and tokenizer/output notes](https://platform.claude.com/docs/en/models/overview)
- [S4 — Artificial Analysis independent launch evaluation](https://artificialanalysis.ai/articles/claude-opus-5-5)
- [S5 — Artificial Analysis current max/default-fallback model page](https://artificialanalysis.ai/models/claude-opus-5-5)
- [S6 — Endor Labs independent Agent Security League and methodology](https://www.endorlabs.com/research/ai-code-security-benchmark)
- [S7 — Official visual PDF support documentation](https://platform.claude.com/docs/en/build-with-claude/pdf-support)
- [S8 — OpenCode Zen route and current price table](https://opencode.ai/docs/zen/)
- [S9 — Endor dedicated report; title/snippet accessible, full body not retrieved](https://www.endorlabs.com/learn/opus-5-5-6x-cheaper-and-2x-faster-than-fable-5-1-but-memorization-keeps-it-off-the-top-spot)
- [S10 — PromptQuick secondary comparison of AA and Endor; not a new test](https://promptquick.ai/blog/opus-5-5-independent-benchmarks)

---

## Signature

- Provided by: **Qoder Sonus** — 2026-10-27
- Method: Sequential public-web research under the assigned Qoder_Sonus reporter label; six successful searches, official API and pricing checks, two independent benchmark organizations, and explicit harness/effort/fallback/security reconciliation. No peer findings were used. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a separately signed findings file alongside this one using the same headings.
