# Claude Opus 5.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic/Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's upgraded Opus-tier model, released 2026-09-22 as an **upgrade to Claude Opus 5 rather than a new generation** — aimed at long-running agentic coding, computer use and knowledge work, priced 20% below Opus 5 at the same 1M context tier. Anthropic's system card says it matches or exceeds Claude Fable 5.1 and Claude Mythos 5.1 on many evaluations and now recommends it as the starting point for most workloads (Fable 5.1 remains the pick for the hardest reasoning / longest runs). Not an alias: Opus 5, Fable 5.1 and Mythos 5.1 are separate IDs/prices.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud and Microsoft Foundry; OpenCode Zen route `opencode/claude-opus-5.5`. API model ID is `claude-opus-5-5` — a dateless pinned snapshot, not a preview alias. Effort settings: low / medium / high / xhigh / max. Batch API supported; a research-preview Fast Mode runs on the Claude API.
- **Release / knowledge:** released 2026-09-22; knowledge cutoff June 2026.
- **IDs:** `claude-opus-5-5`; Zen `opencode/claude-opus-5.5`. No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,000,000 tokens (default and ceiling) with 128,000 max output through the synchronous Messages API — 300,000 via the Message Batches API with the `output-300k-2026-03-24` beta header.
- **Modalities:** text, image and PDF in → text + tool-calls out (no audio, no video, no image generation); reasoning via five effort levels; zero-data-retention available for eligible enterprise customers; API usage does not train Anthropic models by default.
- **Pricing (as of 2026-09-23):** $4 in / $20 out per 1M tokens (Opus 5 was $5/$25); cache reads $0.20 per 1M (a 95% discount, down from $0.50/90%); cache writes $5 per 1M at 5-minute TTL or $8 per 1M at 1-hour TTL; Batch API 50% ($2/$10); Fast Mode (research preview) $8/$40.
- **Architecture:** proprietary; parameter count and architecture undisclosed (consistent with every Claude release).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: **1846 Elo** (Anthropic's system card via HokAI, checked 2026-09-23; Artificial Analysis confirms 1,846 — +111 over Fable 5.1, +138 over Opus 5)
- AA-Briefcase v1.1: **1822 Elo** — first place, +143 over Fable 5.1, leading on both analytical quality and presentation (Artificial Analysis, 2026-09-22)
- Terminal-Bench 4.0: **66.4%** at xhigh effort per Anthropic's table (vs Opus 5's 52.3%) versus **59.6%** on Artificial Analysis' own run — "level with the leader GPT-6 Astra (xhigh)"; both numbers recorded, harness differs
- AutomationBench-AA: leads the evaluation (no numeric value exposed); OSWorld, Tau3-Banking, Toolathlon, Claw-Eval and MCP-Atlas: **no verified public score found** for this release

Reasoning / knowledge:

- HLE: **67.7%** with tools (Anthropic's system card via HokAI, vs Opus 5 63.6% and Fable 5.1 65.6%) and **61.4%** on Artificial Analysis' own run (previous best 59.1%) — both listed, tool-use differs
- Artificial Analysis Intelligence Index: **58 at max effort** — the highest AA has measured by several points, taking the #1 spot (AA, 2026-09-22)
- SciCode: **66.9%** (AA; previous best 63.1% by Fable 5.1)
- AA-Omniscience: leads (one of the six index evaluations it wins; no numeric value exposed)
- Behind on three index evaluations — **CritPt, AA-LCR and GDP.pdf** (no numeric values exposed on the pages checked)
- GPQA Diamond, AIME 2025, MMLU-Pro and ARC-AGI-2: **no verified public score found** — the 2026-09-22 system card deliberately does not publish them (it published them for Opus 5 three months earlier), so this release's suite leans agentic and professional-work.

Coding:

- SWE-bench Pro: **89.9%** (Anthropic's system card via HokAI — vs Opus 5 79.2% and Fable 5.1 81.2%, the highest SWE-bench Pro figure found in this research batch)
- SWE-bench Multilingual: **93.9%** (vs Opus 5 89.5%); SWE-bench Multimodal: **61.4%** (vs Opus 5 59.4%)
- SWE-bench Verified: **no verified public score found** for Opus 5.5 (not published in this release's system card)
- DeepSWE, LiveCodeBench, Vibe Code Bench, GSO: **no verified public score found**

Long context:

- Anthropic's own long-context evaluation (ProgramBench) runs Opus 5.5 across the full window, but the numeric result was cut off in the capture and is therefore **not recorded here** — treat 1M as a documented capability without a verified retention percentage on my evidence.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA 1846 Elo and AA-Briefcase 1822 Elo are both above the 1750+ frontier reference and first-in-field, with Terminal-Bench 4.0 at 66.4% (Anthropic) / 59.6% (AA); capped below the top band because the Terminal-Bench harness here is v4.0 rather than the v2.1 the methodology anchors on, and Tau3-Banking/OSWorld/MCP rows are missing entirely.
- **Reasoning: 90/100.** HLE 61.4–67.7% is far above the 40%+ frontier reference and the AA Intelligence Index of 58 leads all measured models; held just below the very top by Index <60 and by GPQA/CritPt/AA-LCR values that were not published for this release.
- **Context window: 95/100.** 1M input with a 128K output ceiling (300K on the Batches API) is the ≥1M tier floor, since no ≥98% retention figure at 512K+ was verifiable.
- **Multimodal: 85/100.** Text, image and PDF in → text + tool-calls out is squarely the "+video/PDF in = 75–90" band; below 90 because there is no audio/video input and no non-text output — a deliberate gap Anthropic itself flags for teams building audio/video agents.
- **Coding: 93/100.** SWE-bench Pro 89.9%, SWE-bench Multilingual 93.9%, SciCode 66.9% (clears the 55% frontier reference) and Terminal-Bench 4.0 66.4% are a frontier-grade coding profile; capped only by the missing SWE-bench Verified and DeepSWE rows, so the very top of the band is provisional.
- **Cost efficiency: 52/100.** $4 in / $20 out per 1M is above the $3/$15 ≈ 60 anchor (Batch at $2/$10 and a 95%-discount cache-read rate soften it), and it is pricier than 79% of the priced GA models tracked by HokAI — quality is frontier, price is not.
- **Overall Score: 90/100.** (88 + 90 + 95 + 85 + 93) / 5 = 90.2 → **90**. Best fit: the new default for long agentic coding and computer-use workloads — the strongest coding evidence in this batch, at a per-token price only justified if the agentic gains pay for themselves.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (HokAI vendor-checked model page for specs, pricing and the system-card benchmark table; Artificial Analysis launch article for the Intelligence Index, Briefcase/GDPval Elo, Terminal-Bench and pricing details); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
