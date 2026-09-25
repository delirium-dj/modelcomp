# Muse Glimmer 30B — findings by GLM 5.3 Flash

- Source: Meta (`meta-models/Muse-Glimmer-30B`, Apache 2.0 open weights)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' Apache-2.0 30B dense multimodal agent model distilled from Muse Spark (Meta's internal frontier line) — an American-developed open-weight option tuned for tool use, long-horizon tasks and failure recovery; runs on a single 24GB consumer GPU via first-party GGUFs.
- **Provider / access:** Open weights (Apache 2.0 + Meta Usage Policy) on Hugging Face (`meta-models/Muse-Glimmer-30B`, plus official GGUF, vision projector and DFlash drafter); hosted launch partners Together AI, Fireworks, OpenRouter (public per-token pricing not independently verified — repo meta lists ~$0.30 in / $1.10 out, Fireworks/Together/Vercel ~$0.35/$1.50, NVIDIA NIM $0); llama.cpp build b10353+, Transformers 5.15+, vLLM. No Zen Free ID found.
- **Release / knowledge:** Released 2026-08-10; knowledge cutoff 2026-01-04 (official model card).
- **IDs:** `meta-models/Muse-Glimmer-30B` (Hugging Face); `muse-glimmer-30b` (NVIDIA NIM / catalogs).
- **Context window:** 131,072 tokens (official configuration ceiling; verified via the model configuration — a 262K claim would be an extension, not the published native window).
- **Modalities:** text and image input (video sampled as frames, capped ~96 frames in the example processor); text output (no image/video/audio generation); reasoning yes with low/medium/high/xhigh levels set through the prompt/template; tool calls (native); JSON mode.
- **Pricing (as of 2026-09-24):** weights free under Apache 2.0 with no per-token fee (self-hosting costs: 24GB for K-Quant-17GB, 32GB for K-Quant-Dynamic, 64GB for BF16); hosted provider rates as listed in the repo meta (not independently verified); Meta's separate Usage Policy applies.
- **Architecture:** Dense causal transformer ~29.6B total (including ~1.8B vision encoder, 50-layer ViT-G/14-style), 52 decoder layers, hidden 6,656, grouped-query attention (32 query / 2 KV heads), repeating local/local/local/global sliding-window pattern (2,048-token window), DFlash speculative-decoding drafter; Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas Public: **75.5** (Meta-internal launch table; vs Gemma 4 31B's 54.2, Qwen3.6-27B's 62.5)
- DeepSearch QA: **74.6** (Meta-internal; leads row)
- WildClawBench: **47.6** (Meta-internal, OpenClaw harness)
- GAIA2: **43.3** (Meta-internal, OpenClaw)
- tau3-Banking: **23.5** (Artificial Analysis, all three models)
- GDPVal-AA v2: **953 Elo** (AA; Qwen3.6-27B leads at 1,141)
- SkillsBench with skills: **44.3** (Meta-internal; Qwen leads at 46.6)
- Terminal-Bench 2.1: **51.7** (AA; Qwen leads at 60.7)
- SWE-Bench Pro: **51.2** (Meta-internal original set; leads row)
- SWE-Bench Verified: **76.0** (Meta; Qwen vendor-reported 77.2 leads)
- Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- AIME 2026: **94.7%** (Meta; competitors vendor-reported)
- GPQA Diamond: **83.5%** (AA, all three; Gemma 4 31B leads at 85.7%)
- HLE (text, no tools): **22.0%** (AA; Gemma leads at 23.6%)
- SciCode: **43.6** (AA; leads row)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-Bench Pro: **51.2** (as above); SWE-Bench Verified: **76.0** (as above)
- Terminal-Bench 2.1: **51.7** (as above)
- SciCode: **43.6** (as above)
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR: **80.0** (Artificial Analysis; leads row — vs Gemma 68.3, Qwen 73.3)
- Beam128K: **65.1** (Meta-internal; leads row)

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 75.5 (leads its row), DeepSearch QA 74.6, WildClawBench 47.6 and GAIA2 43.3 are solid agentic results, but tau3-Banking 23.5 and GDPVal 953 (trailing Qwen) plus Terminal-Bench 2.1 51.7 keep it mid-band; all launch-table evidence is scaffold-specific and Meta-internal.
- **Reasoning: 75/100.** AIME 2026 94.7% and SciCode 43.6 (leading) are strong, but GPQA Diamond 83.5% (third behind Gemma) and HLE no-tools 22.0% sit low; the vendor-favorable-selection caveat caps it.
- **Context window: 60/100.** 131,072 tokens maps to the 100K–200K tier (50–64); the AA-LCR 80.0 is strong for reasoning over long context but the 131K ceiling is well below the 256K–1M models.
- **Multimodal: 68/100.** Text + image input (video as frames) with CharXiv 78.8, ScreenSpot Pro 75.4 and MMMU Pro 74; text-only output, no audio — per methodology the image-in band is 60–70.
- **Coding: 74/100.** SWE-Bench Pro 51.2 (leads row) and Verified 76.0% are strong mid-frontier, but Qwen3.6-27B beats it on SWE-Bench Verified, TerminalBench and most multimodal tests; missing LiveCodeBench prevents 80+.
- **Cost efficiency: 95/100.** Apache 2.0 weights with no per-token fee self-hosted on a 24GB GPU; hosted rates (~$0.30/$1.10 per repo meta) are unverified but low; Meta Usage Policy review required for commercial use.
- **Overall Score: 70/100.** Mean of the five quality dims (72 + 75 + 60 + 68 + 74) / 5 = 69.8 → 70. Best-fit: a local coding/research agent model for existing 24–32GB hardware and American-jurisdiction open-weight needs — not for low-memory laptops, audio workflows, or decisions requiring independently reproduced benchmark leadership.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (Meta model card and methodology report via Kingy AI's documentation-based launch analysis, NVIDIA NIM, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer.md`, using the same headings.
