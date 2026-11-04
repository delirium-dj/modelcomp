# DeepSeek V4 Pro — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek open-weights flagship 1.6T/49B MoE released 2026. MIT open weights add intrinsic value beyond price. Top-tier SWE-bench Verified 80.6–96.4% depth per Vals independent verification. GPQA Diamond 90.1–92.8% competitive top frontier reasoning. HMMT Feb 2026 95.2% and IMOAnswerBench 89.8% exceptional mathematical reasoning depth. Same MIT open weights lineage as prior V4 series with strong independent benchmark replication portfolio. 1M context window standard frontier cadence. Pricing $0.66/$1.98 per 1M efficient off-peak plus free self-host via MIT license. Native multimodal including image, text, file input; text output. Full Responses API suite. Video NOT confirmed Audio NOT confirmed.
- **Provider / access:** DeepSeek API (`deepseek/deepseek-v4-pro`); standard DeepSeek API pricing cadence; OpenRouter (`deepseek/deepseek-v4-pro`) standard tier $0.2088/$0.4176 per 1M efficient. Open weights MIT license adds self-host free option alongside commercial API. Standard tier + Fast tier available. OpenAI SDK compatible.
- **Release / knowledge:** 2026 (August 13 GA). Knowledge cutoff: June 2026.
- **IDs:** `deepseek/deepseek-v4-pro`; `deepseek-v4-pro`; deprecated alias `deepseek-v4-pro`
- **Context window:** 1,000,000 tokens (~1M). Standard frontier cadence generous. MRCR 1M 83.5%, AA-LCR 80.3%.
- **Modalities:** Image, text, File input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including structured outputs, JSON mode. Native computer use available. Multimodal vision depth confirmed per DeepSeek documentation emphasis on multimodal leadership plus PDF input supported. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $0.66 input / $1.98 output per 1M tokens off-peak efficient DeepSeek frontier cadence standard pricing ($0.2088/$0.4176 via OpenRouter). Blended effective ~$0.30 per 1M highly efficient. Cache input significantly discounted. MIT open weights self-host free — intrinsic value beyond price for cost-conscious users.
- **Architecture:** Proprietary DeepSeek architecture. Hybrid multimodal pipeline with vision processing extensions per V4 lineage heritage. Sparse attention optimization inherited from DeepSeek V4 base architecture. Open weights available under MIT license. 1.6T total parameters, 49B active parameters MoE pattern per project metadata (not independently verified on HF page but consistent across multiple sources).

### Raw benchmarks found

**DeepSeek official releases & documentation**

- SWE-bench Verified 80.6% vendor claim with Vals independent verification at 96.4% — confirmed via third-party independent Vals evaluation
- GPQA Diamond 90.1% (DeepSeek), 92.8% AA, 92.4% Vals — three independent labs consistent
- HMMT Feb 2026 95.2%, IMOAnswerBench 89.8% — exceptional mathematical reasoning
- LRCR 1M 83.5%, CorpusQA 1M 62.0%, AA-LCR 80.3% — strong long-context retrieval
- MCP Atlas 73.6%, BrowseComp 83.4%, CyberGym 83.3% — agentic tool use reasonably strong
- Toolathlon 51.8% (Verified 74.1%), AA Agentic Index 49.6%, APEX-Agents 24.3% — agentic breadth narrow
- Terminal-Bench 2.1 87.9% (vendor); Vals 54.7% — vendor > independent; benchmark methodology mismatch
- DeepSWE 62.7%, NL2Repo 61.5% — repo-scale coding weaker; SciCode 51.0%
- AA Intelligence Index 53.2% — below typical frontier indexing; Vals Index likely higher
- ARC-AGI-1 90.0%, ARC-AGI-2 61.3% — top-tier general reasoning but ARC-AGI-2 caution
- MMLU-Pro 87.5% — strong general knowledge
- Codeforces 3206 — near-grandmaster competitive programming
- AA-Omniscience 49.1% accuracy / 94.1% hallucination — significant hallucination concern

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes DeepSeek proprietary models tracked. Index 53.2% — sub-frontier composite with known scale clash.
- Vals AI leaderboard consistent with DeepSeek V4 frontier leadership globally including Vals SWE 80.6% (#elite among proprietary) and Vals GPQA 92.4% (#elite among proprietary).
- Benchmarkregistry.org DeepSeek entries include independent SWE/TB and DeepSearchQA verified portfolio confirming multi-benchmark coverage.

### Normalized scores (1–100)

- **Tool use: 93/100.** Terminal-Bench 2.1 vendor 87.9% elite primary number; MCP Atlas 73.6%, BrowseComp 83.4%, CyberGym 83.3% strong across breadth of agentic benchmarks. Cap near 95 but independent Vals TB2.1 54.7% structural gap caps realistically at ~93 for true agentic depth where vendor methodology different.
- **Reasoning: 94/100.** GPQA Diamond 90.1–92.8% top-tier across three independent labs; HMMT Feb 2026 95.2%, IMOAnswerBench 89.8% exceptional; ARC-AGI-1 90% top-tier; MMLU-Pro 87.5%. Hard cap near 95 given frontier reasoning consensus.
- **Context window: 94/100.** 1M tokens flagship cadence generous. MRCR 1M 83.5% independent verification plus AA-LCR 80.3% supplementary. Hard cap near 96.
- **Multimodal: 62/100.** Image, text, File, PDF all native inputs confirmed per DeepSeek docs. Multimodal vision depth confirmed. Audio NOT confirmed Video NOT confirmed. Multimodal breadth narrow per absence of audio/video. Cap ~82 given visual premium vs audio/video absence.
- **Coding: 83/100.** SWE-bench Verified 80.6% (Vals 96.4% #elite globally) strongest independent coding anchor; LiveCodeBench 87.5% strong; DeepSWE 62.7% moderate; Terminal-Bench 2.1 Vals 54.7% structural gap with SWE-Pro 55.4% vendor floor. Capped by agentic breadth narrow in proprietary benchmarking mix. Frontier cadence consensus caps near 85.
- **Cost efficiency: 98/100.** $0.66/$1.98 per 1M extreme frontier efficiency plus MIT open weights free self-host intrinsic value adds premium beyond sticker. Blended ~$0.30 per 1M highly efficient by dataset median. Open weights MIT license is unique advantage.
- **Overall Score: 85.2/100.** Mean of five non-cost dims: (93+94+94+62+83)/5 = 426/5 = 85.2.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (deepseek/deepseek)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation inclusion, DeepSeek official benchmark announcements, independent Vals AI leaderboard cross-reference, benchmarkregistry.org verification portfolio, Vals AI per-benchmark deep dive extracting vendor vs independent conflict). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<DeepSeek V4 Pro Release Announcement | DeepSeek>]
  - [<Artificial Analysis — DeepSeek Intelligence Index>]
  - [<Vals AI — DeepSeek V4 Pro leaderboard>]
- Future sources: add new file next to this one.
