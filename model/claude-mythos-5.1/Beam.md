# Claude Mythos 5.1 — findings by Beam

- Source: Anthropic/Claude Mythos 5.1, `anthropic/claude-mythos-5-1`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's most capable model for cybersecurity defense and life sciences (Sep 1, 2026); same underlying model as Fable 5.1 with permissive safeguards. Gated to vetted organizations via trusted access programs. Strongest cyber capabilities of any Anthropic release.
- **Provider / access:** Anthropic trusted access programs; AWS Bedrock `anthropic.claude-mythos-5-1` (preview/beta). Requires 30-day data retention.
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-mythos-5-1`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, file (PDF) in; text out; reasoning yes (adaptive thinking); tool calling yes. No audio.
- **Pricing (as of 2026-10-17):** $10.00 / 1M input, $50.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.90%** (Mythos 5.1 vs Fable 5.1 head-to-head)
- Terminal-Bench 2.1: **88.0%** (Mythos 5)
- OSWorld-Verified: **85%** (Mythos 5)
- BrowseComp: **88%** (Mythos 5)
- CyberGym: **83.8%** (Mythos 5)
- ExploitBench / OSS-Fuzz / Firefox 147 / ExploitGym: Mythos 5.1 substantially outperforms Opus 5 (no numeric in sources)
- SRE-Bench: not individually reported for Mythos 5.1
- Agentic public-lane: not computed (coming soon)

Reasoning / knowledge:

- HLE: **64.5%** (Mythos 5)
- GPQA: **94.1%** (Mythos 5)
- USAMO 2026: **97.6%** (Mythos 5)
- FrontierMath: not individually reported
- AA Intelligence Index: no verified figure found

Coding:

- SWE-bench Verified: **95.5%** (Mythos 5)
- SWE-bench Pro: **80.3%** (Mythos 5)
- SWE-bench Multimodal: **54.9%** (Mythos 5)
- Coding public-lane: not computed (coming soon)

Long context:

- 1M window; MRCR: no verified public score found.

Multimodal:

- CharXiv: **93.5%**; CharXiv w/o tools: **88.9%** (Mythos 5)
- SWE-bench Multimodal: **54.9%**

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 4.0 60.9%, Terminal-Bench 2.1 88.0%, OSWorld 85%, BrowseComp 88%, CyberGym 83.8%; strongest cyber of Anthropic lineup.
- **Reasoning: 92/100.** GPQA 94.1%, USAMO 97.6%, HLE 64.5%; caps at no published ARC-AGI/FrontierMath.
- **Context window: 90/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 92/100.** Text/image/file in; CharXiv 93.5%, CharXiv w/o tools 88.9%.
- **Coding: 88/100.** SWE-bench Verified 95.5%, SWE-bench Pro 80.3%, SWE-bench Multimodal 54.9%; caps at unverified DeepSWE.
- **Cost efficiency: 60/100.** Premium $10/$50 per 1M.
- **Overall Score: 90/100.** Mean of five quality dims; best-fit for cybersecurity defense + life sciences research at premium cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic system card, AWS Bedrock, BenchLM, GIGAZINE); scores are normalized 1–100 interpretations, not official vendor scores. Many Mythos 5.1 figures are inherited from Mythos 5 where 5.1-specific numbers were not published.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.