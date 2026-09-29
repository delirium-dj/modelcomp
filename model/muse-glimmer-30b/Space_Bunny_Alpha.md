# Muse Glimmer 30B — findings by Space Bunny Alpha

- Source: Meta Superintelligence Labs / Muse Glimmer 30B
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B (high reasoning)
- **Short description:** Meta's dense open-weight multimodal model for autonomous agents, coding, tool use, and local deployment on consumer hardware. First Meta open-weights release since Llama 4 and its first under a fully permissive license.
- **Provider / access:** Hugging Face `meta-models/Muse-Glimmer-30B`; OpenRouter `meta/muse-glimmer-30b`; Fireworks AI; NVIDIA NIM `meta/muse-glimmer-30b`. Artificial Analysis lists 4 API providers. Local Transformers/vLLM-style deployment.
- **Release / knowledge:** Released 2026-08-10 (OpenRouter previously listed 2026-08-09; both Artificial Analysis and the AA changelog confirm August 10, 2026). Knowledge cutoff **Jan 4, 2026** — unchanged.
- **IDs:** `meta-models/Muse-Glimmer-30B`; OpenRouter `meta/muse-glimmer-30b`; NVIDIA NIM `meta/muse-glimmer-30b`.
- **Context window:** **131K / 131,072 tokens** on the official model card, OpenRouter, and Artificial Analysis. Artificial Analysis's FAQ text rounds to 130k; the technical spec says 131k. No extension beyond this is claimed.
- **Modalities:** Interleaved text and image input, text output; selectable reasoning effort (low through xhigh), native tool/function calls, and structured output via supported runtimes. No native audio.
- **Pricing (as of 2026-09-29):** Artificial Analysis measures a provider median of **$0.32 input / $1.35 output** per 1M with an 88% cache discount and a blended $0.23 per 1M. This is a change from the 2026-09-25 range of "$0.30 input / $0.04 cached / $1.10–$1.50 output" — hosted rates have converged on $0.32/$1.35. Quantized open weights support local use.
- **Speed / latency (new since 2026-09-25):** Artificial Analysis measures **143.8 output tokens/second** with a **1.35 s TTFT** (provider median; Speed rank #11/142 in class, well above the 87.9 t/s class median).
- **Architecture:** Apache-2.0 dense causal transformer with a dedicated ~1.8B ViT-G/14 vision encoder, 30B total parameters; ~60 GB in BF16 and ~18 GB in 4-bit. 4-bit variants target 24/32 GB hardware and a full BF16 version targets 64 GB VRAM. Artificial Analysis Openness Index: **44** (among the highest measured for any open model).

### Raw benchmarks found

> No Meta model-card row changed since 2026-09-25. The one material addition is the Artificial Analysis Intelligence Index row, which the 2026-09-25 report did not carry. Caution: the AA article published 2026-08-10 quoted an index of **35**; that was the **older index version**. The value on the model's own Artificial Analysis page under Intelligence Index **v4.3.2**, accessed 2026-09-29, is **17** — the 35 figure is stale and must not be used.

Agent / tool use:

- MCP-Atlas Public: **75.5**; DeepSearch QA: **74.6**; WildClawBench: **47.6**; Gaia2: **43.3** (Meta model card, mirrored by the NVIDIA NIM model page).
- OSWorld-Verified: **65.9**; SkillsBench with skills: **44.3**; Tau3-Banking: **23.5**; GDPval-AA v2: **953 Elo** (Meta model card).
- IFBench: **77.0** (Meta model card).
- No new leaderboard rows have appeared for this model since 2026-09-25.

Reasoning / knowledge:

- AIME 2026: **94.7%**; GPQA Diamond: **83.5%**; HLE Text: **22.0%**; Global-MMLU: **81.3%** (Meta model card).
- AA-LCR: **80.0%** (Meta model card).
- **Artificial Analysis Intelligence Index: 17, rank #15/142** (Artificial Analysis v4.3.2, accessed 2026-09-29) — new row. Strong for the class (median 8) and above Gemma 4 31B at the same size, but far below the proprietary frontier.

Coding:

- SWE-bench Verified: **76.0%**; SWE-bench Pro: **51.2%** (Meta model card).
- Terminal-Bench 2.1 with Terminus2: **51.7%**; SciCode: **43.6%** (Meta model card).

Long context:

- AA-LCR: **80.0%**; Beam128K: **65.1%** (Meta model card).
- The verified 131K window is supported by these long-context results; no 1M result was found.

Multimodal:

- Charxiv Reasoning: **78.8**; ScreenSpot Pro: **75.4**; OmniDocBench v1.5: **75.8**; MMMU Pro: **74** (Meta model card).

Sources consulted: [Artificial Analysis Muse Glimmer (high)](https://artificialanalysis.ai/models/muse-glimmer), [Meta Muse Glimmer 30B on NVIDIA NIM](https://build.nvidia.com/meta/muse-glimmer-30b?section=deploy), and the Meta official model card benchmark table, accessed 2026-09-29. The AA index value was read from the model's own page under v4.3.2, not from the older AA article or from a live comparison page.

### Normalized scores (1–100)

- **Tool use: 86/100.** Unchanged. MCP-Atlas at 75.5, DeepSearch QA at 74.6, and OSWorld-Verified at 65.9 demonstrate strong end-to-end tool use; lower Tau3-Banking (23.5) and GDPval-AA relative to larger frontier agents cap the score.
- **Reasoning: 82/100.** Unchanged. AIME 2026 at 94.7%, GPQA at 83.5%, and IFBench at 77.0% are strong for a 30B; HLE at 22.0% limits the top end, and the AA Intelligence Index of 17 confirms the gap to frontier-scale text reasoning.
- **Context window: 65/100.** Unchanged. The verified 131K window with 80.0% AA-LCR and 65.1% Beam128K is useful, but it is below the 1M tier and no larger-window result was found.
- **Multimodal: 78/100.** Unchanged. Image input is supported and the four visual/document benchmarks are consistently strong, though outputs remain text-only.
- **Coding: 88/100.** Unchanged. SWE-bench Verified at 76.0%, SWE-bench Pro at 51.2%, Terminal-Bench at 51.7%, and SciCode at 43.6% show excellent coding-agent capability for a 30B local model.
- **Cost efficiency: 88/100.** Unchanged. Hosted rates are now a verified $0.32/$1.35 with a 88% cache discount and a measured $0.06 cost per Intelligence Index task, and 4-bit local deployment is practical on 24/32 GB hardware; full precision requires substantially more memory.
- **Overall Score: 79.8/100.** (86 + 82 + 65 + 78 + 88) / 5 = 79.8. **Changed from 80** — the 2026-09-25 report recorded 80 without shown arithmetic, and the exact mean of the same five dimensions is 79.8. No dimension moved. Best for privacy-sensitive agents and consumer-hardware deployments rather than maximum frontier reasoning.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Meta's official model card, the NVIDIA NIM model page, OpenRouter metadata, and Artificial Analysis (Intelligence Index v4.3.2 read from the model's own page; the AA article's older index of 35 was rejected as stale). Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer.md`, using the same headings.
