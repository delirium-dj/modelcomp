# Claude Fable 5.1 — findings by Claude Sonnet 5.5

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (paid only; no Free tier found)
- **Short description:** Anthropic's generally available, safeguarded deployment of the same weights as Claude Mythos 5.1, aimed at long-horizon agentic coding, knowledge work and research. Mythos 5.1 is the same model with looser cyber/life-science safeguards, available only via trusted-access programs. Fable 5.1 supersedes Fable 5 (June 2026).
- **Provider / access:** Claude API `claude-fable-5-1` (Messages API; not Chat Completions or Responses), Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS, and Claude apps (Pro/Max/Team/Enterprise). OpenCode Zen: no verified public listing found.
- **Release / knowledge:** 2026-09-01 release; reliable knowledge cutoff and training data cutoff both Jun 2026 (Claude Platform docs).
- **IDs:** `anthropic/claude-fable-5-1`. No Free ID exists on Zen, and no Zen ID for Fable 5.1 could be verified.
- **Context window:** 1M total, 128K max output (Claude Platform docs; AA lists 1.0M).
- **Modalities:** Text and image in, text out (AA, Claude Platform docs). Anthropic says it reads diagrams, charts and tables inside files and PDFs. No audio or video input found. Reasoning: yes (adaptive thinking always on, effort low/medium/high/xhigh/max, default high). Tool calls: yes (forced tool use returns an error). JSON mode: no verified public statement found.
- **Pricing (as of 2026-09-30):** $10 input / $50 output / $0.25 cached read per 1M tokens (down from $1 cache read on Fable 5); paid only. Anthropic estimates ~25% lower cost on typical workloads and ~45% on highly agentic ones. AA measured $7.63 per Intelligence Index task at max effort (v4.3).
- **Architecture:** Proprietary; parameters and architecture undisclosed. Same underlying model as Mythos 5.1.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**. Terminal-Bench 4.0 is the newer version: **55.8%** (Anthropic, vendor-run; Mythos 5.1 scores 60.9%). AA re-run snapshot, Sep 9: ~52%.
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1853 Elo** (GDPval-AA v2, AA and Anthropic, launch-day scale; Opus 5 scores 1824 and the confidence intervals overlap). AA re-anchored the scale on Sep 9 and showed 1764.
- OSWorld 2.0: **77.9% partial / 41.7% strict** (Anthropic, August 2026 task release)
- AutomationBench: **31.4%** (Anthropic). AutomationBench-AA: ~59% (AA, Sep 9 snapshot).
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic, SE ±3.5–4.5 pts)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
  Reasoning / knowledge:
- GPQA Diamond: **93.7%** (third-party comparison citing DataCamp; not vendor-published)
- HLE: **60.9%** no tools / **65.0%** with tools (Anthropic). AA measured 59.1% at launch.
- LCR / MLCR: **80.0%** AA-LCR (BenchmarkList, rank 9 of 409). MLCR: no verified public score found.
- CritPt: no verified public score found (AA lists CritPt as "under review")
- Artificial Analysis Intelligence Index / BenchLM overall: **53 / #5 of 222** (AA v4.3.2, max effort; tied with GPT-6 Astra at 53). Earlier index versions gave 66 (v4.1) and 57 (v4.2). BenchLM BenchAlign: **82.5 / #3**.
- Omniscience Accuracy / Hallucination Rate: no verified public score found for the split. BenchmarkList lists the AA-Omniscience index at 43.45, rank 1 of 28.
  Coding:
- SWE-bench Verified / SWE-Pro: Verified: no verified public score found (a 95.0% claim appears on one secondary blog; Anthropic published none and BenchLM shows "—"). SWE-bench Pro: **81.2%** (Anthropic system card, via secondary reporting); BenchLM lists **80.0%**.
- LiveCodeBench: no verified public score found (one secondary blog claims 90.52%; BenchLM shows "—")
- SciCode / AA-SciCode: **63%** (AA, Sep 9 snapshot, max effort; flagged "under review" since). Medium effort scores 56%.
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified DeepSWE score found. CursorBench 3.2.0: **73.4%** (Anthropic, max effort). AA Coding Agent Index: **70** in Claude Code (DataCamp-cited) vs **62** on v1.4 (CodingFleet); the sources conflict.
  Long context:
- AA-LCR 80.0% (BenchmarkList). No MRCR/RULER score at 512K+ found ("no long-context retrieval reported" at 512K+).

### Normalized scores (1-100)

- **Tool use: 92/100.** GDPval-AA 1853 (1764 after re-anchoring) is above the ~1750 frontier marker, OSWorld 2.0 is 77.9% partial, and TB 4.0 is 55.8%. Capped because TB2.1 and Tau3 have no verified scores, OSWorld strict is only 41.7%, and AutomationBench is 31.4%.
- **Reasoning: 93/100.** GPQA 93.7% and HLE 60.9% / 65.0% are in the 90–100 band, and the AA Index of 53 ranks #5 of 222. Capped because the AA Index is tied with GPT-6 Astra, AA-LCR is 80%, and CritPt has no verified score.
- **Context window: 95/100.** Verified 1M total (vendor docs and AA) puts it in the ≥1M tier. It does not reach 100 because no ≥98% retrieval result at 512K+ was found.
- **Multimodal: 80/100.** Text and image in, PDF/document understanding per Anthropic, text out. No audio or video input and no non-text output.
- **Coding: 92/100.** SWE-bench Pro 80–81.2%, CursorBench 73.4%, SciCode 63%, TB 4.0 55.8%, and a strong AA Coding Agent Index. Capped because SWE-bench Verified, LiveCodeBench and DeepSWE lack verified scores, the AA Coding Agent Index sources conflict (62 vs 70), and GPT-6 Astra leads on Terminal-Bench.
- **Cost efficiency: 30/100.** $10 / $50 per 1M matches the ~30 anchor. The $0.25 cache read helps agentic workloads, but AA measured ~1.7x Fable 5's output tokens, and cost per task is $7.63 against about $3.26 for GPT-6 Astra.
- **Overall Score: 90.4/100.** Mean of (92 + 93 + 95 + 80 + 92) / 5. Best fit: hard, long-running agentic coding and knowledge-work tasks where quality matters more than price.

---

## Signature

- Provided by: **Claude Sonnet 5.5 (anthropic/claude-sonnet-5-5)** — 2026-09-30
- Method: Public internet research (Anthropic announcement, system card and Claude Platform docs, AWS Bedrock model card, Artificial Analysis, BenchLM, BenchmarkList, Vellum, DataCamp, plus secondary coverage); scores are normalized 1-100 interpretations, not official vendor scores. Artificial Analysis revised its Intelligence Index several times in September (v4.1 66, v4.2 57, v4.3 53), so index values depend on the version.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
