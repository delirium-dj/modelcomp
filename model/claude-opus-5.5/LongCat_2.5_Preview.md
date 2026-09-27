# Claude Opus 5.5 — findings by LongCat 2.5 Preview

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** The first model in Anthropic's Claude 5.5 family — Fable 5.1-level performance on most work at ~40% lower operating cost than Opus 5, tuned for long-running agentic coding and knowledge work.
- **Provider / access:** Anthropic Claude API — `claude-opus-5-5` (Chat Completions-style messages API; adaptive thinking always on, `effort` parameter steers depth). Also Amazon Bedrock, Google Vertex, Azure AI Foundry. Released 2026-09-22.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff June 2026 (per Anthropic model documentation).
- **IDs:** `anthropic/claude-opus-5-5` (Bedrock/Vertex/Foundry), `claude-opus-5-5` (Claude API). No Zen Free ID — paid only.
- **Context window:** 1M tokens; 128K max output (up to 300K with the output-300k beta header on the Batches API).
- **Modalities:** Text, image, PDF in; text out; reasoning yes (adaptive, always on); tool calls yes (function calling, MCP, computer use, code execution); structured outputs; prompt caching (reads at 5% of base input price).
- **Pricing (as of 2026-09-27):** $4.00/M in, $20.00/M out; cache read $0.20/M; cache write $5.00/M; Fast mode $8/$40; Batch API 50% off. Paid only.
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic launch table; Artificial Analysis independently reports 59.6% for the max-effort default-fallback run — AA's TB4.0 leaderboard leader)
- GDPval-AA v2.1: **1846 Elo** (leads Fable 5.1 at 1735 and Opus 5 at 1708; Anthropic launch table)
- OSWorld / AutomationBench / Tau3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for this exact model ID — closest proxy Claude Mythos 5.1 (same-class Anthropic flagship) at **94.6%** (llm-stats), provisional
- HLE: no verified public score found for this exact model ID
- System card: AI R&D capabilities "at or slightly above those of Claude Mythos 5.1" (Anthropic)

Coding:

- SWE-bench Pro 16: **89.9%** (avg over 5 trials; Anthropic system card)
- SWE-bench Multilingual: **93.9%**; SWE-bench Multimodal 17: **61.4%**
- DeepSWE v1.1: at or slightly above Claude Mythos 5.1 (system card); absolute score not published
- LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB4.0 66.4% (Anthropic-reported; 59.6% AA-independent) is the top-tier result on the hardest terminal benchmark, and GDPval-AA 1846 Elo leads every published model.
- **Reasoning: 88/100.** Provisional: no GPQA/HLE absolute published for this exact model ID; the same-class Mythos 5.1 proxy (GPQA 94.6%) plus the system card's AI-R&D-at/above-Mythos claim support a frontier-band score, held under 90 pending direct numbers.
- **Context window: 95/100.** 1M tokens with 128K output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 80/100.** Text/image/PDF input plus computer use reaches the 75–90 band; no audio/video input and text-only output cap it there.
- **Coding: 90/100.** SWE-bench Pro 16 89.9% and SWE-bench Multilingual 93.9% are the strongest public coding numbers in the field; DeepSWE (at/above Mythos 5.1) supports the band.
- **Cost efficiency: 55/100.** $4.00/$20.00 pricing sits just above the $3/$15 (≈60) reference point; ~40% lower operating cost than Opus 5 on typical workloads.
- **Overall Score: 89/100.** Mean of the five quality dims (90+88+95+80+90)/5 = 88.6 → 89. Best-fit: default for long-horizon agentic coding and knowledge work at Anthropic — Fable-class performance with materially better economics.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Anthropic system card + launch post, Artificial Analysis, llm-stats, Claude platform docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
