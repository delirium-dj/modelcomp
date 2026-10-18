# Beam — findings by Big Pickle

- Source: Reflection AI (`beam`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam (Beam 1.0)
- **Short description:** Reflection AI's first open-weight model, announced 2026-10-05 and released on Hugging Face 2026-10-16 under Apache 2.0. A sparse MoE built for coding, reasoning, and long-horizon agentic workloads with a deliberate focus on inference-time token efficiency (Reflection claims 3–4× less inference compute than GLM-5.2 at comparable quality). Positioned as a "workhorse model" for enterprises, sovereign nations, and developers — the Western open-weight answer to DeepSeek, Kimi, and Z.AI. Not an alias of any other entry.
- **Provider / access:** Hugging Face `reflection/Beam-1.0-501B-A23B` (BF16, FP8, NVFP4 checkpoints); OpenCode Zen (free limited-time tier via `opencode/beam`); API via Reflection platform (waitlist at launch); vLLM serving (custom Docker image, Beam support not yet in a vLLM release). Also distributed through hyperscalers and neoclouds per Reflection's launch plan.
- **Release / knowledge:** announced 2026-10-05 (TechCrunch, Semafor, Fortune, alphaXiv — four independent sources); weights released 2026-10-16 (Hugging Face, Tech AI Wire, vLLM recipes, AA changelog). Knowledge cutoff **June 30, 2026** (Hugging Face model card) — one of the freshest cutoffs in the dataset.
- **IDs:** `reflection/Beam-1.0-501B-A23B` (Hugging Face, Apache 2.0); `opencode/beam` (OpenCode Zen).
- **Context window:** 1M tokens native / 128K max output (Hugging Face model card; vLLM recipes confirm 1,048,576). Note: repo `meta.json` says "256K served on beta" — the API/beta route may not yet expose the full 1M; self-hosted deployments get the full window. Hybrid sliding-window (512-token) + NoPE full-attention architecture.
- **Modalities:** text in, text out only (Hugging Face model card; TechCrunch confirms text-only; Inkling, its Western peer, is multimodal — Beam is not). Developed predominantly for English. Tool calls; reasoning channel (Harmony message format with analysis + answer channels); structured JSON output.
- **Pricing (as of 2026-10-18):** free limited-time OpenCode Zen / Command Code tier (`meta.json` `freeTierNote`); Apache 2.0 open weights self-host free; AA provider median ~$0.70 in / $2.10 out per 1M tokens (`meta.json`; BenchLM shows "pricing unavailable" — model is 2 days old, API pricing not yet broadly indexed). Token efficiency (3–4× fewer reasoning tokens than GLM-5.2 per Reflection) further reduces effective cost.
- **Architecture:** open-weights sparse MoE, 501.3B total / 23.4B active, 256 experts, 52 layers (3 dense + 49 MoE), Gated GQA + Sliding Window Attention, 152K vocabulary, modified Harmony chat template. Pre-trained on 23.8T curated tokens in 4 weeks; post-trained with a high-compute RL run of 100M+ rollouts on 10.5K NVIDIA GB300 GPUs over 4 weeks (alphaXiv; TechCrunch confirms "high-compute reinforcement learning"). BF16 / FP8 / NVFP4 checkpoints; NVFP4 fits on 4× B200 or 8× H100; FP8 on 8× H200; BF16 on 8× B200. Apache 2.0 license.

### Raw benchmarks found

> Vendor-reported figures come from the Hugging Face model card (BF16 column unless noted) and the Reflection launch blog (2026-10-05, updated 2026-10-08). Independent numbers (Artificial Analysis, BenchLM) are marked as such. The model is 2 days old at time of writing — independent coverage is thin but non-zero (AA evaluated within 11 days of announcement; BenchLM has 19 sourced benchmarks).

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (BF16, HF card; blog confirms; Tech AI Wire / VentureBeat independently report 80.1 — vs GLM-5.2 81.0, GLM-5.3 88.2, Kimi K3 88.3, DeepSeek V4.1 Flash 90.6)
- MCP-Atlas: **80.8%** (BenchLM sourced; vs GLM-5.2's 76.8 — Beam leads)
- BrowseComp: **76.8%** (BenchLM sourced)
- DeepSearchQA: **80.5%** (BenchLM sourced)
- HLE w/ tools: **51.1%** (BenchLM sourced; vs GLM-5.2's 54.7)
- τ³-bench: **36.1%** (BenchLM sourced — notably weak; no τ²-bench score found)
- OSWorld / OSWorld-Verified: **no verified public score found**
- GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- GPQA-Diamond: **90.6%** (BF16, HF card; FP8 90.3, NVFP4 89.3)
- AIME 2026: **97.7%** (BenchLM sourced)
- HLE w/o tools: **36%** (BenchLM sourced)
- CritPt: **16.3%** (BenchLM sourced; vs GLM-5.2's 20.9)
- AA-LCR: **78.2%** (BF16, HF card; FP8 79.4)
- AA Omniscience (index, public split): **10.8** (BF16, HF card; FP8 8.8)
- LongBench v2: **67.5%** (BF16, HF card; FP8 67.6)
- IFBench: **79.6%** (BF16, HF card; FP8 80.7)
- Artificial Analysis Intelligence Index v4.3: **30** (independent, AA changelog 2026-10-16 — "#2 among US open weights models")
- BenchLM public-lane reasoning score: **79.6** (unranked, 2 rankable rows — coverage too thin for a firm overall score; BenchLM overall not yet computed)
- LMArena: **not yet ranked** (model is 2 days old; no arena votes recorded as of 2026-10-18)
- Vals AI: **not yet covered**

Coding:

- SWE-bench Verified: **80.9%** (Reflection blog, 10/8 update) / **81.6%** (HF card, BF16) — two vendor sources disagree by 0.7pp; FP8 80.2, NVFP4 80.7. Both listed.
- SWE-bench Multilingual: **78.0%** (blog) / **78.3%** (BenchLM sourced)
- SWE-bench Pro v1: **66.1%** (BF16, HF card; FP8 65.9)
- SWE-bench Pro v2-Hard: **76.5%** (BF16, HF card) / **77.2%** (blog, 10/8 update) / **78.4%** (FP8) / **78.6%** (NVFP4) — quantized variants score higher on this benchmark; unusual but real
- Terminal-Bench 2.1: **80.1%** (same as agentic row above — coding/terminal overlap)
- DeepSWE v1.1: **43.3%** (BF16, HF card; blog says 44.4 — minor discrepancy; vs GLM-5.3's 61.0, DeepSeek V4.1 Flash's 74.2)
- LiveCodeBench: **88.3%** (HF card quantization table via Tech AI Wire)
- SciCode: **49.2%** (BenchLM sourced)
- SWE Atlas Codebase QnA: **31.8%** (BF16, HF card; FP8 32.2)
- SWE-bench Pro v2-Hard comparison (blog): Beam 77.2 vs GLM-5.2 — no public score; GLM-5.3 84.3, Kimi K3 88.2

Multimodal:

- This model is text-only. No vision, audio, or PDF input. TechCrunch explicitly contrasts Beam with Inkling (Mira Murati's Thinking Machines Lab, July 2026), which is multimodal. No multimodal benchmarks apply.

Long context:

- AA-LCR: **78.2%** (independent AA benchmark, HF card)
- LongBench v2: **67.5%** (HF card; vs GLM-5's 64.5)
- No RULER or MRCR score published for Beam.

### Scores

- **Tool use: 78/100.** Terminal-Bench 2.1 80.1% is near the top of the open-weights pack (only 0.9pp behind GLM-5.2's 81.0) and above many closed models. MCP-Atlas 80.8% beats GLM-5.2 (76.8). BrowseComp 76.8% and DeepSearchQA 80.5% are strong. Offsets: τ³-bench 36.1% is notably weak; HLE w/tools 51.1% trails GLM-5.2 (54.7); no OSWorld or GDPval-AA score to round out the agentic picture.
- **Reasoning: 78/100.** GPQA-Diamond 90.6% is excellent (above GLM-5's 86.0, below Opus 4.7's 94.2/91.4); AIME 2026 97.7% is near-saturated; AA-LCR 78.2% and LongBench v2 67.5% verify long-context reasoning; AA Intelligence Index 30 (#2 US open weights) is a solid independent placement. Offsets: HLE w/o tools 36% is mid; CritPt 16.3% trails GLM-5.2 (20.9); AA Index 30 is well behind the current frontier (Opus 5.5 at 63).
- **Context window: 85/100.** 1M native is frontier-tier and matches the largest context windows in the dataset (Opus 4.7, Gemini 3.x, GLM-5.3). AA-LCR 78.2% and LongBench v2 67.5% verify real-world long-context fidelity. Offsets: the beta/API route serves 256K (`meta.json`), not the full 1M — self-hosted deployments get the full window; no RULER or MRCR score published.
- **Multimodal: 5/100.** Text-only. No vision, audio, or PDF input. Explicitly contrasted with multimodal peers (Inkling) in press coverage.
- **Coding: 82/100.** SWE-bench Verified 80.9–81.6% is open-weights SOTA-tier (above GLM-5's 77.8, near GLM-5.2's 82.8); LiveCodeBench 88.3% is excellent; SWE-bench Multilingual 78.0–78.3% is strong; SWE-Pro v1 66.1% and v2-Hard 76.5–78.6% are solid; TB2.1 80.1% confirms terminal-agent coding ability. Offsets: DeepSWE 43.3% trails GLM-5.3 (61.0) and DeepSeek V4.1 Flash (74.2) by a wide margin; SciCode 49.2% is mid; SWE Atlas QnA 31.8% is low. The vendor SWE-V discrepancy (80.9 vs 81.6) is minor.
- **Cost efficiency: 92/100.** Free limited-time OpenCode Zen tier; Apache 2.0 weights self-host free; AA provider median ~$0.70/$2.10 is cheaper than GLM-5 ($1.00/$3.20); 3–4× fewer inference tokens than GLM-5.2 means the effective cost-per-task is even lower than the sticker price suggests. Offsets: 501B total parameters makes self-hosting non-trivial (NVFP4 needs 4× B200 or 8× H100); the free Zen tier is limited-time; API pricing is 2 days old and may shift.
- **Overall Score: 66/100.** Half-up mean of Tool use (78), Reasoning (78), Context window (85), Multimodal (5), Coding (82) = 328/5 = 65.6 → 66. Cost efficiency (92) is excluded per `model-comparison.md` methodology.

### Caveats and conflicts

- **Very young model:** Beam is 2 days old at time of writing (weights released 2026-10-16). Independent coverage is thin: AA evaluated within 11 days (Index 30); BenchLM has 19 sourced benchmarks but no overall score yet; LMArena and Vals AI have not yet covered it. Scores above are directional and will firm up as independent evaluation accumulates.
- **SWE-bench Verified discrepancy:** the Reflection blog says 80.9% (10/8 update); the Hugging Face model card says 81.6% (BF16). Both are vendor-sourced. The blog may pre-date a final model card revision. Tech AI Wire's independent reproduction of the HF card confirms 81.6. The 0.7pp gap is immaterial for scoring.
- **SWE-bench Pro v2-Hard quantization anomaly:** NVFP4 (78.6%) and FP8 (78.4%) score higher than BF16 (76.5%). This is unusual — quantization typically costs accuracy — but the numbers are consistent across the HF card and the blog. Possible explanations: evaluation variance, or the quantized checkpoints benefiting from different sampling behavior. Both listed without editorializing.
- **Served context vs native context:** the HF card and vLLM recipes confirm 1M native context. The repo `meta.json` says "256K served on beta" — the API/beta route may not yet expose the full window. Self-hosted deployments get 1M. This is a deployment detail, not an architecture limit.
- **AA Index placement:** AA scores Beam 30 on Index v4.3, "#2 among US open weights models." The #1 US open-weights model is not named in the changelog snippet. For context, GLM-5 (Feb 2026) scores 28 on the same index version; GLM-5.2 and GLM-5.3 are Chinese open-weights models and excluded from the "US" ranking.
- **TechCrunch caveat at announcement:** "Reflection's performance claims haven't been independently verified" (2026-10-05). This was accurate at announcement; AA's independent evaluation (2026-10-16) has since partially resolved it — Index 30 confirms the model is real and competitive, though specific benchmark rows from the HF card remain vendor-reported.
- **RL scale:** the 100M+ rollout RL run on 10.5K GB300s is the largest publicly documented RL run as of October 2026 (alphaXiv). Reflection claims "no signs of plateau" as RL compute increased. This is a vendor claim; no independent verification of the scaling curve exists.
- **τ³-bench weakness:** 36.1% is the clearest weak spot in the agentic profile. No τ²-bench score was found. The model's tool-use strength (TB2.1, MCP-Atlas, BrowseComp) does not transfer to the τ³ customer-service simulation format.
- **Knowledge cutoff:** June 30, 2026 (HF card) — fresher than every other model in this research batch (Opus 4.7: Jan 2026; GLM-5: unreported; GPT-5.1-Codex: unreported/Nov 2025 era; Nemotron-3.5-super-vl: Oct 2026 per NVIDIA docs).

### Sources

- Hugging Face model card: https://huggingface.co/reflection/Beam-1.0-501B-A23B
- Hugging Face NVFP4 checkpoint: https://huggingface.co/reflection/Beam-1.0-501B-A23B-NVFP4
- Reflection launch blog (2026-10-05, updated 2026-10-08): https://reflection.ai/blog/introducing-beam
- Reflection availability post: https://reflection.ai/blog/beam-is-available
- alphaXiv reproduction of launch post: https://www.alphaxiv.org/abs/2610.introducing-beam
- TechCrunch coverage (2026-10-05): https://techcrunch.com/2026/10/05/reflection-debuts-beam-a-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost
- Tech AI Wire (2026-10-18): https://techaiwire.com/articles/reflection-beam-open-weights-apache-2-0-hugging-face/
- vLLM recipes: https://recipes.vllm.ai/reflection/Beam-1.0-501B-A23B
- BenchLM (multiple comparison pages): https://benchlm.ai/compare/glm-5-2-vs-reflection-beam, https://benchlm.ai/compare/reflection-beam-vs-solar-open-2
- Artificial Analysis changelog (2026-10-16): https://artificialanalysis.ai/changelog
- Fortune (2026-10-05): https://fortune.com/2026/10/05/reflection-ai-unveils-beam-a-new-us-based-open-source-model-to-compete-with-china
- Semafor (2026-10-05): https://www.semafor.com/article/10/05/2026/reflection-ai-unveils-an-open-source-answer-to-chinese-labs

**Big Pickle (opencode/big-pickle)** — 2026-10-18
