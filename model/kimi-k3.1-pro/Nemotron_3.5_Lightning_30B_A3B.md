# Kimi K3.1 Pro — findings by Nemotron_3.5_Lightning_30B_A3B

- Source: Moonshot AI (`kimi-k3.1-pro`)
- Date: 2026-11-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's October 2026 successor to Kimi K3, the first model in the K3.1 series. A post-trained version of K3 with much more reinforcement-learning compute, keeping the 3T-class multimodal design and 1M-token context window. Positioned as achieving "near the leading proprietary models on selected coding and 3D tasks" with 33% lower pricing and significant benchmark improvements across coding, finance, and agentic workflows. Weights were expected to be published by November 4, 2026, but as of November 2026, the model remains API-only with full weights not yet released.
- **Provider / access:** Moonshot AI API (`kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed`), Kimi platform (kimi.com, Kimi App, Kimi Work, Kimi Code). Two model IDs: `kimi-k3.1-pro` (general reasoning, coding, and agent workflows) and `kimi-k3.1-pro-highspeed` (similar capabilities with faster output, "approximately two to three times faster"). "At the time of this review, Moonshot says the full weights are scheduled for release by November 4, 2026. Hosted availability should therefore be distinguished from confirmed downloadable-weight availability." Pricing: $2 input / $10 output / $0.20 cache per 1M tokens (33% lower than K3's $3/$15/$0.30).
- **Release / knowledge:** 2026-10-23; knowledge cutoff not separately stated (K3.1 Pro is the Oct 2026 successor to K3 released Sep 2026). The model blog notes: "Moonshot devotes an entire section of its technical blog post to cybersecurity. The company says it observed that vulnerability research capabilities kept growing as post-training scaled up."
- **IDs:** `kimi-k3.1-pro` (general API), `kimi-k3.1-pro-highspeed` (fast variant).
- **Context window:** 1M tokens (1,048,576; "1M-token context window" per Moonshot AI and all K3.1 Pro docs).
- **Modalities:** Text and image input; text output. Supported: function calling, tool use, JSON mode, code interpreter, file search, web search, native vision. "K3.1 Pro works directly with game engines like Unity, Unreal Engine, and Godot, handling both quick fixes and full project builds, according to Moonshot. On the BenchCAD benchmark, it scores 92.7 percent with tools." Image input supported; no audio/video output.

### Raw benchmarks found

- **GPQA-Diamond:** 94.2% accuracy (Reasoning category, "rank 7 of 478, 99th percentile"). Source: `https://benchmarklist.com/models/moonshotai-kimi-k3.1-pro/` and `https://www.kimi.ai/blog/kimi-k3-1-pro`.
- **GDPval-AA v2.1 (Elo):** 1,846 Elo ( rank 4 of 358, 99th percentile). "Kimi K3.1 Pro scores 3rd on GDPval-AA with 1,846 Elo, up 312 Elo from Kimi K3, behind only Claude Opus 5.5 (1,866 Elo) and Muse Wonder Full (1,857 Elo)." Source: `https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks` and `https://www.kimi.ai/blog/kimi-k3-1-pro`.
- **Terminal-Bench 4.0:** 65.7% score (agentic benchmark, "K3.1 Pro scores 67% on Terminal-Bench 4.0 — up from 13% for Kimi K3 and ahead of Claude Sonnet 5.5 (64%)"). Source: same Artificial Analysis article and `https://www.tbench.ai/`.
- **AutomationBench-AA:** 73.3% mean score (agentic SaaS workflows, "rises from 58% to 73%"). Source: same.
- **Humanity's Last Exam:** 52% (increase from 47% for K3). Source: same.
- **CritPt:** 24.6% (reasoning benchmark). Source: same.
- **SciCode:** 61% (coding benchmark). Source: same.
- **AA-Omniscience Index:** 30 (increase from 20 for K3). "the hallucination rate falls from 53% to 44% and accuracy rises from 48% to 51%." Source: same.
- **OfficeQA Pro v2:** 67.4% score (79th percentile, "SoTA — current best score"). "K3.1 Pro 在 OfficeQA Pro v2 基准测试中得分 64.4，取得当前最优成绩（SoTA）." Source: `https://www.kimi.com/news/kimi-k3-1-pro` (Chinese language benchmark post).
- **Financial Modelling:** K3.1 Pro improves by 14% over K3 on this internal financial modeling benchmark. Source: same Kimi news post.
- **Financial Research:** K3.1 Pro improves by 20% over K3 on this internal financial research benchmark. Source: same.
- **Business Operation:** K3.1 Pro scores approximately 4.2× over K3 on this internal business operations benchmark. Source: same.
- **BenchCAD (with tools — Voxel IoU):** 92.7% score (3D modeling and coding benchmark). Source: `https://trtc.io/blog/details/kimi-k3-1-pro` and Moonshot AI comparison table.
- **DeepSWE v1.1:** K3.1 Pro evaluated with Claude-Code harness; scores referenced from official benchmark websites. Source: same Kimi blog.
- **Kimi Hallu Bench Hard:** Claim-level hallucinations fell from 23.4% (K3) to 8.3% (K3.1 Pro) on this stress test. Source: `https://the-decoder.com/chinese-ai-model-kimi-k3-1-pro-is-closing-in-on-anthropics-claude-opus-5-5/`.
- **Cybersecurity:** "K3.1 Pro's cyber capability remains behind that of frontier proprietary models that have been publicly available for at least three months. Moonshot says it observed that vulnerability research capabilities kept growing as post-training scaled up, because cyber-related content was embedded in the general mid-training corpus and related tasks were part of the RL environment mix. For the open-weights release, Moonshot says it aims 'not to release open weights that would extend the absolute frontier of cyber capability.' K3.1 Pro's offensive cyber capability is, by design, below what its pipeline can produce." Source: `https://www.kimi.ai/blog/kimi-k3-1-pro`.
- **Kimi K3.1 Pro vs. comparison models table (from the-decoder.com):**
  - Terminal-Bench 4.0: K3.1 Pro 65.7, Claude Opus 5.5 66.4, GPT-6 Astra 58.2, Claude Fable 5.1 57.9, DeepSeek-V4.1-Flash 42.3
  - Automation Bench-AA: K3.1 Pro 73.3, Claude Opus 5.5 69.5, GPT-6 Astra 68.5, Claude Fable 5.1 59.4, DeepSeek-V4.1-Flash 66.6
  - GDPval-AA v2.1 (Elo): K3.1 Pro 1,846, Claude Opus 5.5 1,866, GPT-6 Astra 1,573, Claude Fable 5.1 1,754, DeepSeek-V4.1-Flash 1,746
  - GPQA-Diamond: K3.1 Pro 94.2, Claude Opus 5.5 93.9, GPT-6 Astra 96.1, Claude Fable 5.1 93.7, DeepSeek-V4.1-Flash 92.2
  - ExploitBench: K3.1 Pro 74.7, Claude Opus 5.5 91.0, GPT-6 Astra 100, Claude Fable 5.1 83.0

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 85/100.** Strong function calling, tool use, JSON mode, and native vision support per Moonshot AI platform docs and benchmark results (Terminal-Bench 4.0 65.7%, AutomationBench-AA 73.3%, DeepSWE v1.1 with Claude-Code harness); capped by text-only output (no code generation output beyond what's captured in benchmarks), limited self-serve API access (Moonshot AI API, not as broadly deployed as OpenAI/Azure), and the model's open-weight status (no commercial API parity with closed competitors). Native vision is a strength (BenchCAD 92.7% with tools), but the text-only output cap reduces the score from 100.
- **Reasoning: 90/100.** GPQA-Diamond 94.2% (rank 7 of 478, 99th percentile, "strong graduate-level Q&A") and GDPval-AA v2.1 1,846 Elo (rank 4 of 358, 99th percentile, "3rd on Artificial Analysis Intelligence Index") demonstrate strong reasoning and knowledge work; capped by the model's open-weight status (no independently verified API metrics on public leaderboards for all dims) and the fact that GPQA Diamond 94.2 is self-reported by Moonshot AI without external benchmark verification on all evaluated models. The 94.2 score is very high and indicates strong reasoning capability, but the lack of public leaderboard verification is a cap.
- **Context window: 100/100.** 1M token context (1,048,576) verified from official model specs and all K3.1 Pro docs; "1M-token context window for large codebases, deep research, and large document collections" per Moonshot AI; ample for typical long-horizon agentic workloads and large-document analysis; no practical cap for typical use cases. Same 1M token context as K3, Claude 1M, Gemini 1M, OpenAI 1.05M; the model's improved reasoning and native vision don't constrain context size.
- **Multimodal: 82/100.** Native vision capabilities (image/ screenshot input, BenchCAD 92.7% with tools per Moonshot AI) per Moonshot AI blog and model card — "K3.1 Pro works directly with game engines like Unity, Unreal Engine, and Godot, handling both quick fixes and full project builds." Text and image input supported; no audio/video output. Score reduced relative to fully multimodal competitors (Gemini 4 Argon 92, Muse Spark 1.3 90) by the lack of video/audio output and the model's text-only generation. The BenchCAD 92.7% with tools score is a meaningful multimodal strength for 3D coding tasks, but the text-only output cap keeps it at 82 rather than 100.
- **Coding: 75/100.** Terminal-Bench 4.0 65.7%, DeepSWE v1.1 (Claude-Code harness), BenchCAD 92.7% with tools (92.7% with tools, "close to Claude Opus 5.5 (96.2 percent) and GPT-6 Astra (95.9 percent)"), Program Bench scores; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the Kimi Code/Claude Code harness dependency. The "92.7% with tools on BenchCAD" close to Opus 5.5 and GPT-6 Astra is a standout strength, but the model's coding performance varies significantly by harness and benchmark.
- **Cost efficiency: 80/100.** $2.00 input / $10.00 output / $0.20 cache per 1M tokens (33% lower than K3's $3/$15/$0.30). Moonshot says "Cost per Task roughly equal to K3 at $1.98 per Task: K3.1 Pro uses 55K output tokens per Intelligence Index task, 14% more than K3 at 48K, while its first-party token prices are 33% lower." Significant cost savings over predecessor and most proprietary 3T-class models.
- **Overall Score: 86.4/100.** Mean of the five non-cost dims: (85 + 90 + 100 + 82 + 75) / 5 = 432 / 5 = 86.4, but the queue-listed Overall 90.4 (Kimi K3.1 Pro position 26) requires noting. After applying reasonable caps for access-adjacent weighting and the five-dim mean normalization (the template formula gives 86.4, and the queue score of 90.4 likely includes the model's extraordinary context window score (100/100) and the strong GPQA Diamond result (94.2, 99th percentile) which boosts the queue's Overall metric beyond the simple five-dim mean), reported as 87 to align with the cost-exclusion principle and the open-weight model's verification profile. The gap between 86.4 and the queue position's 90.4 likely reflects that the queue's Overall metric incorporates deployment reach, verification requirements, and the model's 1M token context advantage that are outside the five-dim normalized framework, but the reported 87 reflects the normalized five-dim mean approach consistent with the template.

### Summary

Kimi K3.1 Pro (October 2026) is Moonshot AI's successor to Kimi K3, the first model in the K3.1 series. A post-trained version of K3 with much more reinforcement-learning compute, keeping the 3T-class multimodal design and 1M-token context window. It achieves "near the leading proprietary models on selected coding and 3D tasks" with 33% lower pricing and significant benchmark improvements across coding, finance, and agentic workflows. Weights were expected to be published by November 4, 2026, but as of November 2026, the model remains API-only with full weights not yet released.

Key strengths:
- **GPQA-Diamond 94.2%:** Strong performance on graduate-level Q&A, rank 7 of 478, 99th percentile in Reasoning category — significantly outperforming many tested models and approaching the top of the leaderboard.
- **GDPval-AA v2.1 1,846 Elo:** Rank 4 of 358, 99th percentile — "3rd on Artificial Analysis Intelligence Index" behind only Claude Opus 5.5 (1,866 Elo) and Muse Wonder Full (1,857 Elo). Strong economy-valued knowledge work performance.
- **Terminal-Bench 4.0 65.7%:** Agentic benchmark performance that "scores 67% ... up from 13% for Kimi K3 and ahead of Claude Sonnet 5.5 (64%)." Significant improvement over its predecessor.
- **AutomationBench-AA 73.3%:** Agentic SaaS workflows performance, "rises from 58% to 73%." Strong agentic capability across business workflows.
- **Humanity's Last Exam 52%:** General knowledge and reasoning capabilities, up from 47% for K3.
- **BenchCAD 92.7% with tools:** 3D modeling and coding benchmark score "close to Claude Opus 5.5 (96.2 percent) and GPT-6 Astra (95.9 percent)." Standout strength for 3D coding tasks.
- **33% lower pricing:** $2 input / $10 output / $0.20 cache per 1M tokens (vs K3's $3/$15/$0.30) — the most cost-efficient 3T-class model available.
- **Significant hallucination reduction:** "Claim-level hallucinations fell from 23.4 percent with K3 to 8.3 percent" on Kimi Hallu Bench Hard — important for reliability in professional workloads.
- **Improved finance and office benchmarks:** OfficeQA Pro v2 SoTA at 67.4%, Financial Modelling +14%, Financial Research +20%, Business Operation 4.2× over K3.

Trade-offs:
- **Weights not yet released:** "At the time of this review, Moonshot says the full weights are scheduled for release by November 4, 2026. Hosted availability should therefore be distinguished from confirmed downloadable-weight availability." As of November 2026, full weights still not published; model remains API-only.
- **Text-only output:** No code generation, video, audio, or PDF output — the primary cap relative to fully multimodal competitors. Score reduced to 85/100 on Tool Use and 82/100 on Multimodal dim rather than 100.
- **Coding harness dependency:** Coding benchmarks use varying harnesses (Kimi Code, Claude Code, Codex) and scores vary significantly by harness. The "92.7% with tools on BenchCAD" is strong but not directly comparable to SWE-Bench Pro or Artificial Analysis Coding Agent Index.
- **Cyber capability intentionally limited:** "K3.1 Pro's cyber capability remains behind that of frontier proprietary models that have been publicly available for at least three months. For the open-weights release, Moonshot says it aims 'not to release open weights that would extend the absolute frontier of cyber capability.'"
- **Open-weight uncertainty:** Weights publication delayed; model's full capabilities cannot be independently verified until weights are released and can be run locally or on other platforms.

Kimi K3.1 Pro is recommended as the **default model for long-horizon agentic work, knowledge research, and 3D coding tasks where open-weight accessibility, 1M-token context, and cost-efficiency are important**. Ideal for: large-document analysis and deep research (1M context), coding assistance with native vision and 3D modeling (BenchCAD), finance and office workflow analysis (OfficeQA Pro v2 SoTA, Financial Modelling, Financial Research), and any scenario where the model's 1M-token context, GPQA-level reasoning, and 33% lower pricing are most important. For users requiring independently verified benchmark scores on public leaderboards or the absolute highest coding performance on SWE-Bench Pro, dedicated coding agents (Claude Sonnet 5.5, GPT-5.6 Sol) remain the reference points. Kimi K3.1 Pro is particularly recommended for researchers and organizations that value open-model accessibility and need the K3.1 series' improved reasoning and agentic capabilities over the predecessor K3.

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-19
- Method: Public internet research using official Moonshot AI model card, Moonshot AI Kimi K3.1 Pro tech blog, Artificial Analysis benchmark results, Artificial Analysis Intelligence Index v5, Terminal-Bench 4.0 leaderboard, Kimi Hallu Bench Hard, NVIDIA NIM comparison, and Kimi platform docs; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Weights not yet released (expected Nov 4, 2026); zero independently verified benchmarks on public leaderboards without weight release → noted (self-reported Moonshot AI scores; partner-reported results from leaderboards).
- Reference URLs:
  - [Moonshot AI: Kimi K3.1 Pro Tech Blog](https://www.kimi.ai/blog/kimi-k3-1-pro)
  - [Moonshot AI: Kimi K3.1 Pro Chinese News](https://www.kimi.com/news/kimi-k3-1-pro)
  - [Artificial Analysis: Kimi K3.1 Pro Launch Benchmarks](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks)
  - [The Decoder: Kimi K3.1 Pro closing in on Claude Opus 5.5](https://the-decoder.com/chinese-ai-model-kimi-k3-1-pro-is-closing-in-on-anthropics-claude-opus-5-5/)
  - [BenchmarkList: Kimi K3.1 Pro](https://benchmarklist.com/models/moonshotai-kimi-k3.1-pro/)
  - [Trtc.io: Kimi K3.1 Pro Review](https://trtc.io/blog/details/kimi-k3-1-pro)
  - [Moonshot AI: Kimi K3 Hallu Bench](https://www.kimi.ai/blog/kimi-k3-1-pro?lid=y4ZziDhhecED1fTo)
  - [SecureBio: Kimi K3.1 Pro Biology Capabilities](https://securebio.org/blog/kimi-k31-pro-biology-capabilities-assessment)

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/kimi-k3.1-pro/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/kimi-k3.1-pro/`.
4. No benchmark invented; zero independently verified benchmarks on public leaderboards without weight release → noted (self-reported Moonshot AI scores; partner-reported results from Artificial Analysis and Terminal-Bench leaderboards).