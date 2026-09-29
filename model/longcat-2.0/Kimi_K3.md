# LongCat 2.0 — findings by Kimi K3

- Source: Meituan/LongCat-2.0 (`meituan-longcat/LongCat-2.0`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0
- **Short description:** Meituan's open-weight 1.6T-parameter MoE coding/agent model, trained on 50K+ AI ASIC accelerators over 35T+ tokens; launched with Claude Code / OpenClaw / Hermes integration and a 1M-token context target. Succeeded by the agent-first LongCat 2.5 Preview (Sept 2026), which added image input.
- **Provider / access:** LongCat API Platform (`longcat.chat/platform`, international payment still limited per vendor), web demo at longcat.ai, Vercel AI Gateway listing; self-host via Hugging Face `meituan-longcat/LongCat-2.0` (SGLang GPU recipe: 16x H20; NPU branch SGLang-FluentLLM). Not on OpenCode Zen (Zen carries `longcat-2.5-preview-free`, the newer sibling).
- **Release / knowledge:** Launched 2026-06-30 (official blog); weights + inference code released MIT-licensed 2026-07-05. Knowledge cutoff not stated publicly.
- **IDs:** `meituan-longcat/LongCat-2.0` (Hugging Face / GitHub). No Zen Free ID exists for 2.0.
- **Context window:** Trained on 1M-context data (hundreds of billions of tokens; CP parallelism scaled to 512+) — vendor-verified at 1M. Max output not publicly specified.
- **Modalities:** Text in/out only (image understanding arrived with LongCat 2.5 Preview). Reasoning: yes (MOPD post-training with dedicated Agent / Reasoning / Interaction expert groups). Tool calls: yes, harness-native via Claude Code / OpenClaw / Hermes.
- **Pricing (as of 2026-09-29):** No verified public per-token API price found for the 2.0 API (2.5 Preview carries $0.30/$1.20 limited-time rates; do not conflate). Self-hosting is free under MIT but requires datacenter-class hardware (~16x H20 reference; even 2-bit quant needs ~400 GB+ of weight storage).
- **Architecture:** MoE, 1.6T total / ~48B active per token; LongCat Sparse Attention (LSA — streaming-aware, cross-layer, hierarchical indexing; evolution of DeepSeek Sparse Attention); 135B-parameter N-gram Embedding (n-gram size 5); MTP speculative decoding; Muon optimizer, deterministic operators; 50K+ ASIC pretraining with zero irrecoverable loss spikes.

### Raw benchmarks found

> Meituan's launch table: in-house unified harness unless starred (* = externally reported metric); Terminal-Bench 2.1 measured through Claude Code (8c16g sandbox, temp 1.0, top_p 0.95, 6-hour timeout), SWE-bench series through Claude Code (4c8g sandbox). Directional, not independently reproduced as of this writing.

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (Meituan launch table; Gemini 3.1 Pro 70.7*, GPT-5.5 73.8*, Opus 4.7 71.7*, Opus 4.8 78.9*)
- FORTE (Full-cycle Office Real-world Task Evaluation, 15 professions, 45-min timeout): **73.2** (Meituan; GPT-5.5 77.8, Opus 4.8 77.2)
- BrowseComp: **79.9** (Meituan; Gemini 3.1 Pro 85.9*)
- RWSearch: **78.8** (Meituan; GPT-5.5 85.3)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (Meituan launch table; Opus 4.8: 92.4)
- IMO-AnswerBench: **81.8** (Meituan; Opus 4.8: 75.3)
- IFEval: **90.0** (Meituan; Opus 4.8: 86.0)
- HLE: no verified public score found
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:

- SWE-bench Pro: **59.5%** (Meituan, Claude Code harness; GPT-5.5 58.6*, Opus 4.7 64.3*, Opus 4.8 69.2*)
- SWE-bench Multilingual: **77.3%** (Meituan; Opus 4.7 80.5*, Opus 4.8 84.8*)
- Terminal-Bench 2.1: 70.8% (see above)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token context training is vendor-verified (CP parallelism 512+, dedicated 1M-context data) — but no MRCR / RULER / GraphWalks retrieval score was published.

### Normalized scores (1–100)

- **Tool use: 79/100.** Terminal-Bench 2.1 70.8 edges Gemini 3.1 Pro, and FORTE 73.2 / BrowseComp 79.9 show competent long-horizon agent execution with harness-native tooling. Capped: all numbers are Meituan-harness, and the mid-70s trail GPT-5.5/Opus 4.8 externally reported results.
- **Reasoning: 80/100.** GPQA-diamond 88.9 approaches the frontier reference (90%+) and IMO-AnswerBench 81.8 beats Opus 4.8's externally reported 75.3. Capped: no HLE / MRCR / independent index score exists, and community probes noted reasoning gaps on niche factual chains.
- **Context window: 95/100.** 1M-context training is explicitly vendor-verified with serious infrastructure behind it — solidly in the ≥1M tier. Capped below 100: no published retrieval-at-length percentage (≥98% at 512K+ needed for 100).
- **Multimodal: 15/100.** Text-only model; image input arrived only in the 2.5 Preview successor.
- **Coding: 80/100.** SWE-bench Pro 59.5 beats GPT-5.5's external 58.6 and SWE-bench Multilingual 77.3 is strong; Terminal-Bench 2.1 70.8 corroborates. Capped: Opus 4.8 leads every shared code column (69.2 / 84.8 / 78.9), and no DeepSWE / SciCode / LiveCodeBench numbers exist.
- **Cost efficiency: 70/100.** MIT weights are free, and self-host hardware (16x H20-class) prices this as a datacenter model; no verified public API per-token price found for 2.0, so cost is scored provisionally on free-weights-with-heavy-hardware terms.
- **Overall Score: 69.8/100.** Mean of the five non-cost dims (79+80+95+15+80)/5 = 69.8. Best fit: self-hosted (or LongCat-platform) agentic coding at repo scale where MIT licensing and data residency matter more than closed-frontier accuracy.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: Public internet research (Meituan launch post as reproduced with methodology notes by explainx.ai long-read, July 5 weight-release update, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
