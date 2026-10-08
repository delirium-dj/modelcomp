# GPT-5.5 — findings by DeepSeek 4.1 Flash

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (OpenAI flagship generation between GPT-5.4 and GPT-5.6). Not an alias of GPT-5.5 Pro — the Pro variant is a separate, differently priced SKU scored lower on the same panel.
- **Short description:** OpenAI's flagship reasoning/coding model of the GPT-5.5 generation, sold on terminal-agent coding (Codex CLI), computer-use automation and knowledge work; premium priced and slow per-token relative to its successors.
- **Provider / access:** OpenAI platform (Responses/Chat Completions per OpenAI conventions) and Codex CLI for terminal-agent work; Cursor/OpenRouter-class gateways not confirmed in the sources found. No OpenCode Zen Free ID.
- **Release / knowledge:** no verified public release date found; RankLLMs tracks it as a current GA entry (panel updated 2026-09-18). Knowledge cutoff: no verified public value found.
- **IDs:** `gpt-5.5`. No Zen Free ID, so cost is scored on paid pricing. **No vendor model card could be found for this ID** — the curated record for this folder already flags the entry as "awaiting a verified public model card", and this scan found no OpenAI page for it either, so most card fields rest on third-party panel evidence only.
- **Context window:** **1.1M tokens claimed by RankLLMs**, with no vendor confirmation and no published max-output figure — the curated record explicitly says "no verified public value". Treated as unverified below.
- **Modalities:** no verified public modality matrix found. Scored below on the GPT-5 family's text+image-in convention, which is an assumption, not a verified fact.
- **Pricing (as of 2026-09-20):** **$7.78 per 1M blended** (RankLLMs — "premium tier, cheaper than only 4% of priced models we track"). Per-direction in/out rates are not published in the sources found, so the figure is an aggregator blended rate rather than a vendor list price. Paid only.
- **Architecture:** proprietary; parameter count, MoE layout and training details not disclosed anywhere in the sources found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.4%** (RankLLMs verified panel, explicitly "via Codex CLI" — a harness-specific number)
- GDPval-AA: **1769 Elo** (RankLLMs blind human-eval code arena — at the frontier reference level used in this project, 1750+)
- OSWorld-Verified computer use: **78.7%**; BrowseComp: **78.7%** (RankLLMs — both rows show the same value, so treat the pairing as unconfirmed)
- HLE with tools: **52.2%** (RankLLMs); HealthBench Pro: **51.8%**
- Tau3-Banking / Tau2-Bench / MCP-Atlas / Claw-Eval / Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE (with tools): **52.2%** (RankLLMs — above the 40%+ frontier reference)
- GPQA Diamond: **56.4%** and MATH-500: **52.2%** (RankLLMs radar values — far below the 88.3% GPQA peer median and inconsistent with the HLE result, so flagged as unconfirmed; the whole radar column on that site sits in the 50–65 range for every model, which suggests a normalised value rather than raw accuracy)
- Blueprint-Bench 2 spatial reasoning: **36.2%** (RankLLMs)
- Artificial Analysis Intelligence Index / LCR / MLCR / CritPt / Omniscience accuracy / Hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **75.6%** (RankLLMs verified panel — near the 78.3–78.5% peer median)
- SWE-Bench Pro: **58.6%** (RankLLMs)
- Terminal-Bench 2.1: **83.4%** via Codex CLI (RankLLMs); Blueprint-Bench 2 36.2% is a separate spatial-reasoning result, not coding
- DeepSWE / LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench / SWE-Atlas: no verified public score found

Multimodal:

- No verified public input/output matrix or image benchmark was found for this ID. Benchmark panels publish no MMMU, VideoMME or CharXiv row for GPT-5.5, so multimodal capability is unverified.

Long context:

- No MRCR, RULER or GraphWalks retrieval result exists at any window length; the 1.1M window itself is a single aggregator's claim with no vendor confirmation, so long-context capability is effectively unverified.

Composite panels:

- RankLLMs: **52.2/100, #27 of 80** tracked models; throughput **33 tps** (slowest in this scan's sample).

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA 1769 Elo reaches the frontier reference, Terminal-Bench 2.1 83.4% and OSWorld-Verified 78.7% are strong computer-use results, and HLE-with-tools 52.2% supports real tool competence; capped by TB 2.1 still under the 88%+ reference (and harness-specific to Codex CLI), BrowseComp's duplicated 78.7% row and no Tau3/MCP-Atlas/Claw-Eval data.
- **Reasoning: 80/100.** HLE-with-tools 52.2% and HealthBench Pro 51.8% are solidly above mid-band, with GDPval knowledge-work Elo as supporting evidence; the low, unconfirmed GPQA (56.4%) and MATH-500 (52.2%) rows and the absence of any AA Intelligence Index or LCR figure hold it well below frontier.
- **Context window: 88/100.** Scored on RankLLMs' 1.1M claim (≥1M band) discounted because no vendor confirmation, no max-output figure and no retrieval measurement exist; the curated record for this folder says no verified public value, so this is the softest number in the report.
- **Multimodal: 60/100.** No verified modality matrix was found; the score assumes the GPT-5 family convention of text+image input with text output, which is an assumption. If the model is text-only, this dimension drops to 15 and Overall falls to ~71.
- **Coding: 82/100.** SWE-bench Verified 75.6%, SWE-Bench Pro 58.6% and Terminal-Bench 2.1 83.4% via Codex CLI make it a credible coding agent, but it is behind the GPT-5.6 siblings tracked here and has no DeepSWE, LiveCodeBench, SciCode or Vibe Code Bench evidence.
- **Cost efficiency: 55/100.** A $7.78/1M blended aggregator rate is above the ~$6/1M blended equivalent of the $3/$15 anchor in the methodology, and 33 tps output makes per-task wall-clock cost worse; no free tier or Zen ID exists.
- **Overall Score: 80/100.** (88 + 80 + 88 + 60 + 82) / 5 = 79.6 → **80**. Best fit: Codex-CLI-style terminal coding and computer-use automation where GDPval-grade knowledge work matters; a poor fit for budget-sensitive or high-volume workloads.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-20
- Method: fresh public internet research on 2026-09-20 — RankLLMs verified panel (updated 2026-09-18) as the only source publishing numbers for this ID; no vendor model card, pricing page or system card could be located, so card fields were marked unverified rather than invented. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
